import { readFile, writeFile } from 'fs/promises'

export async function replaceRegionBlock(filePath, regionName, newLines) {
    let content = await readFile(filePath, 'utf8')

    // figure out if the file uses CRLF or LF
    const linebreak = content.includes('\r\n') ? '\r\n' : '\n'

    /**
     * Regex breakdown:
     *  ^(\s*)               -> capture any leading spaces/tabs at start of line into $1
     *  (\/\/\s*#region\s+TYPES)  -> capture the actual region marker into $2
     *  [\s\S]*?             -> non-greedy match everything until...
     *  ^\1(\/\/\s*#endregion)    -> a line that starts with the same indent ($1), then "#endregion" into $3
     *
     * Flags:
     *  m = multiline (so ^ and $ match start/end of lines)
     */
    const re = new RegExp(
        `^(\\s*)(\\/\\/\\s*#region\\s+${regionName})[\\s\\S]*?^\\1(\\/\\/\\s*#endregion)`,
        'm'
    )

    const replaced = content.replace(re, (_, indent, startMarker, endMarker) => {
        // build the block, prefixing each line with the captured indent
        const block = newLines.map(line => indent + line).join(linebreak)
        // re-assemble: indent+start, newline, block, newline, indent+end
        return [
            indent + startMarker,
            block,
            indent + endMarker
        ].join(linebreak)
    })

    await writeFile(filePath, replaced, 'utf8')
    console.log(`✅ ${filePath} updated!`)
}