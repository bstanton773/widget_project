import Component from "./Component";
import { State } from "./types";

export default class Canvas {
    private _widgets: Component[] = [];
    
    constructor(
        private parent: HTMLElement,
        private _state: State = {}
        ){
            this.parent.innerHTML = '';
            this.parent.id = 'canvas';
            const newStyle: Partial<CSSStyleDeclaration> = {
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                gridTemplateRows: "repeat(12, 1fr)",
                height: "100vh",
                columnGap: "5px",
                rowGap: "5px",
                aspectRatio: "1 / 1"
            };
            Object.assign(this.parent.style, newStyle);
        }
        
    public get state(): State {
        return this._state;
    }
    public set state(value: State) {
        this._state = {...this._state, ...value};
        this.rerender();
    }
    public get widgets(): Component[] {
        return this._widgets;
    }
    public set widgets(value: Component[]) {
        this._widgets = value;
    }

    public addWidget(widget: Component){
        this.widgets.push(widget);
        widget.canvas = this
        this.render()
    }

    public render(){
        this.parent.innerHTML = "";
        for (const widget of this.widgets){
            this.buildWidget(widget)
        }
    }

    public rerender(){
        for (const widget of this.widgets){
            let div = document.getElementById(widget.id) as HTMLDivElement;
            if (this.injectVars(widget, div)){
                this.buildWidget(widget)
            }
        }
    }

    public removeWidget(widget:Component){
        this.widgets = this.widgets.filter((w:Component) => w.id !== widget.id);
    }

    private injectVars(widget:Component, div:HTMLDivElement):boolean{
        let changeState = false;
        let key: keyof State;
        div.innerHTML = widget.content;
        for (key in this.state){
            if (div.innerHTML.includes(`{{ ${key} }}`)){
                div.innerHTML = div.innerHTML.split(`{{ ${key} }}`).join(this.state[key])
                changeState = true
            }
        }
        return changeState
    }

    private buildWidget(widget: Component){
        let div = this.initializeDiv(widget);
        this.buildShape(widget, div);
        this.injectVars(widget, div);
        this.placeShape(widget, div);
        this.parent.append(div);
        widget.click?.setClick();
    }

    private initializeDiv(widget: Component):HTMLDivElement{
        let div = document.createElement('div');
        div.id = widget.id;
        const newStyle: Partial<CSSStyleDeclaration> = {
            margin: "auto",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            padding: "3%",
            aspectRatio: "1 / 1"
        }
        Object.assign(div.style, newStyle)
        return div
    }

    private buildShape(widget:Component, div:HTMLDivElement):void{
        Object.assign(div.style, widget.shape.attributes)
    }

    private placeShape(widget:Component, div: HTMLDivElement):void{
        const newStyle: Partial<CSSStyleDeclaration> = {
            gridArea: widget.locationTop.toString(),
            gridColumnStart:widget.locationLeft.toString(),
            gridColumnEnd: "span " + widget.width,
            gridRowStart: widget.locationTop.toString(),
            gridRowEnd: "span " + widget.height,
        }
        Object.assign(div.style, newStyle);
    }
}