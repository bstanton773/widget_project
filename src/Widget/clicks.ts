import Click from "./Click";
import Component from "./Component";

class WidgetClick extends Click{
    constructor(
        widget:Component,
        private _callback: (e: Event, widget: Component) => void
    ){
        super(widget);
    }

    public override setClick(): void {
        const div = document.getElementById(this.widget.id);
        if (div !== null){
            div.addEventListener('click', (e: Event) => { this._callback(e, this.widget) })
        }
    }
}

class RemoveWidgetClick extends WidgetClick {
    constructor(
        widget:Component,
        _callback: (e: Event, widget: Component) => void
    ){
        super(widget, _callback)
    }

    public override setClick(): void {
        this.widget.canvas?.removeWidget(this.widget);
        super.setClick();
    }
}


export {
    WidgetClick,
    RemoveWidgetClick
}
