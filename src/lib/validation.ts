interface Task {
  taskTitle: string;
  taskType: string;
  taskNumberofRespondent: string;
  taskDescription: string;
  taskLocation: string;
  taskCompensation: string;
  taskDeadline: string;
  taskRequirements: string;
  taskLinkUpload: string;
  taskLinkUploadTwo: string;
}

export function validateTaskFields(task: Task): string[] {
  const errors: string[] = [];
  
  if (!task.taskTitle.trim()) {
    errors.push("Task title is required");
  }
  
  if (!task.taskType.trim()) {
    errors.push("Task type is required");
  }
  
  if (!task.taskNumberofRespondent.trim()) {
    errors.push("Number of respondents is required");
  }
  
  if (!task.taskDescription.trim()) {
    errors.push("Task description is required");
  }
  
  if (!task.taskRequirements.trim()) {
    errors.push("Task requirements are required");
  }

  return errors;
}
