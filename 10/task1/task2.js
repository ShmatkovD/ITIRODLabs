class Task {

    constructor(title, description, start, finish) {
        this.title = title;
        this.description = description;
        this.start = Date.parse(start);
        this.finish = Date.parse(finish);
        this.subtasks = [];
    }

    addSubtask(task) {
        this.subtasks[this.subtasks.length] = task;
    };
}


class PerformingTask extends Task {
    constructor(...args){
        super(args[0], args[1], args[2], args[3]);
        // super().apply(this, arguments); // how to make it here by this way
        this._progress = 0;
        this._isFinished = false;

    }

    get progress() {
        return this._progress;
    }

    set progress(value){
        progress = Math.min(Math.max(value, 0), 100);
        if (progress === 100){
            this._isFinished = true;
        }
    }

    get status() {
        return this._isFinished
    }
}

var task = new PerformingTask("a", "b", "01.02.2016", "02.02.2016");
console.dir(task);
task.progress(10);
alert(task.progress());