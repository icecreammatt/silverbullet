import { getCursor, insertAtCursor, moveCursor } from "@silverbulletmd/plugos-silverbullet-syscall/editor";

export async function insertQuery() {
  let cursorPos = await getCursor();
  await insertAtCursor(`<!-- #query  -->\n\n<!-- #end -->`);
  await moveCursor(cursorPos + 12);
}