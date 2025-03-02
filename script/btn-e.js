document.getElementById("btn-e")
.addEventListener("click", function(){
    alert("Board updated Successfully")

    const taskA = document.getElementById('task-as')
    const taskAValue = parseInt(taskA.innerText);
    const taskAValueNumber = taskAValue - 1 ;
    taskA.innerText = taskAValueNumber;
    const navValue = document.getElementById('nav-increase');
    const navValueInt = parseInt(navValue.innerText)
    const navValuePlus = navValueInt + 1;
    navValue.innerText = navValuePlus;
    const btnA = document.getElementById("btn-e");
    btnA.style.opacity = "0.2";
    btnA.style.pointerEvents = "none";
    if (navValuePlus > 28) {
        alert("Congrates!! You have completed all the current task")
    }
    const now = new Date();
    const formattedTime = now.toLocaleDateString('en-us', {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true});
    const task = document.getElementById('Integrate')
    const taskName = task.innerText;
    const activityLog = document.getElementById('activity-log')
    const newParagraph = document.createElement('p');
    newParagraph.classList.add("p-4", "bg-[#f4f7ff]", "rounded-lg", "shadow-md", "ml-2", "mr-2", "text-[12px]");
    newParagraph.innerText = `You have Complete the task ${taskName} at ${formattedTime}`;
    activityLog.appendChild(newParagraph)

    
      



})
