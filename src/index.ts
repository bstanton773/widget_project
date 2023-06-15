import { Canvas, RightLeaningContainer, Component, LeftLeaningContainer, CircleContainer, WidgetClick } from "./Widget";


const canvas = new Canvas(document.body);
canvas.state = {test:'Brian', city:'Chicago'}



let rlwidget = new Component();
rlwidget.shape = new RightLeaningContainer();;
rlwidget.content = `<h1>{{ test }} from {{ city }}!</h1>`
rlwidget.height = 4;
rlwidget.width = 4;
canvas.addWidget(rlwidget);

let llwidget = new Component();
llwidget.shape = new LeftLeaningContainer();;
llwidget.locationLeft = 3;
llwidget.locationTop = 4;
llwidget.shape.borderColor = 'red';
llwidget.shape.zIndex = 99;
llwidget.content = '<h3>Another Widget</h3>'
canvas.addWidget(llwidget);

const circleWidget = new Component();
circleWidget.shape = new CircleContainer();
circleWidget.locationLeft = 5;
circleWidget.locationTop = 8;
circleWidget.content = '<h4>Enlarge!</h4>'
new WidgetClick(circleWidget, (_, widget:Component) => {
    let widgets = widget.canvas?.widgets!;
    for (const w of widgets){
        w.width += 2;
        w.height += 2;
        widget.canvas?.render()
    }
})

canvas.addWidget(circleWidget);

const circleWidget2 = new Component();
circleWidget2.shape = new CircleContainer();
circleWidget2.locationLeft = 8;
circleWidget2.locationTop = 5;
circleWidget2.content = '<h4>Decrease!</h4>'
new WidgetClick(circleWidget2, (_, widget:Component) => {
    let widgets = widget.canvas?.widgets!;
    for (const w of widgets){
        w.width -= 2;
        w.height -= 2;
        widget.canvas?.render()
    }
})

canvas.addWidget(circleWidget2);