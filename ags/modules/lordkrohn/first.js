import Widget from 'resource:///com/github/Aylur/ags/widget.js';

const first = Widget.Label({
    label: 'some example content',
})

const myBar = Widget.Window({
    name: 'bar',
    anchor: ['top', 'left', 'right'],
    child: first,
})

