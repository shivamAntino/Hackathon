import { Feedback } from "../../components/FeedbackCard/types";
import { Employee } from "./types";

export const getTop3Employees = (employees: Employee[]) => {
  const sortedEmployees = [...employees];
  sortedEmployees.sort(
    (a, b) =>
      getAverageFeedback(b.performanceArr) -
      getAverageFeedback(a.performanceArr)
  );
  const top3Employees = sortedEmployees.slice(0, 3);
  return [top3Employees[1], top3Employees[0], top3Employees[2]];
};

export const getAverageFeedback = (feedbacks: Feedback[]) => {
  let total = 0;
  feedbacks.forEach((feedback) => {
    total += feedback.value ? +feedback.value : 0;
  });
  return total / feedbacks.length;
};
