function Task(title, description, start, finish) {
    this.title = title;
    this.description = description;
    this.start = Date.parse(start);
    this.finish = Date.parse(finish);
    this.subtasks = [];

    this.addSubtask = function(task) {
        this.subtasks[this.subtasks.length] = task;
    };
}


function PerformingTask() {
    Task.apply(this, arguments);
    var progress = 0;
    this._isFinished = false;

    this.progress = function(){
        if (!arguments.length) return progress;

        progress = Math.min(Math.max(arguments[0], 0), 100);
        if (progress === 100){
            this._isFinished = true;
        }
    }
}

PerformingTask.prototype.getStatus = function(){
    return this._isFinished;
};

PerformingTask.prototype = Object.create(Task);
PerformingTask.prototype.constructor = PerformingTask;

var task = new PerformingTask("a", "b", "01.02.2016", "02.02.2016");
console.dir(task);
task.progress(10);
alert(task.progress());