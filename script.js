const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const monthYearElement = document.querySelector('.month-year');
const calendarBody = document.querySelector('.calendar-body');
const prevMonthButton = document.querySelector('.prev-month');
const nextMonthButton = document.querySelector('.next-month');

// Function to render the calendar
function renderCalendar() {
  // Update month-year display
  monthYearElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;
  
  // Get the first day of the current month
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  
  const numDaysInMonth = lastDay.getDate();
  const firstDayIndex = firstDay.getDay();
  
  // Clear the calendar body
  calendarBody.innerHTML = '';

  // Add empty divs for days before the 1st day of the month
  for (let i = 0; i < firstDayIndex; i++) {
    const emptyDay = document.createElement('div');
    emptyDay.classList.add('day', 'empty');
    calendarBody.appendChild(emptyDay);
  }

  // Add days of the month
  for (let day = 1; day <= numDaysInMonth; day++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.textContent = day;
    
    // Highlight today's date
    if (day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
      dayElement.classList.add('today');
    }
    
    calendarBody.appendChild(dayElement);
  }
}

// Handle the "Previous Month" button click
prevMonthButton.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

// Handle the "Next Month" button click
nextMonthButton.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});

// Initial render of the calendar
renderCalendar();
