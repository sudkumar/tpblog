import markdown from "markdown";

export default class MDEditorService{
    constructor(){
        this._markdown = markdown.markdown;
    }

    toHTML(md){
        return this._markdown.toHTML(md);
    } 
}