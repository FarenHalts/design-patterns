// Receiver
class TextEditor {
    constructor() {
        this.content = '';
    }

    write(text) {
        this.content += text;
        console.log(`Write: "${text}" -> "${this.content}"`);
    }

    delete(length) {
        const deleted = this.content.slice(-length);
        this.content = this.content.slice(0, -length);
        console.log(`Delete: "${deleted}" -> "${this.content}"`);
        return deleted;
    }
}

// Commands
class WriteCommand {
    constructor(editor, text) {
        this.editor = editor;
        this.text = text;
    }

    execute() {
        this.editor.write(this.text);
    }

    undo() {
        this.editor.delete(this.text.length);
    }
}

class DeleteCommand {
    constructor(editor, length) {
        this.editor = editor;
        this.length = length;
        this.deleted = '';
    }

    execute() {
        this.deleted = this.editor.delete(this.length);
    }

    undo() {
        this.editor.write(this.deleted);
    }
}

// Invoker
class EditorInvoker {
    constructor() {
        this.history = [];
        this.current = -1;
    }

    execute(command) {
        this.history = this.history.slice(0, this.current + 1);
        command.execute();
        this.history.push(command);
        this.current++;
    }

    undo() {
        if (this.current >= 0) {
            this.history[this.current].undo();
            this.current--;
        }
    }
}

// Demo
const editor = new TextEditor();
const invoker = new EditorInvoker();

invoker.execute(new WriteCommand(editor, 'Hello'));
invoker.execute(new WriteCommand(editor, ' World'));
invoker.undo();
invoker.execute(new WriteCommand(editor, ' JS'));
