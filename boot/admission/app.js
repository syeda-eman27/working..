
// Create the dropdown for Day

const dayDropdown = document.getElementById('day');
for (let i = 1; i <= 31; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.textContent = i;
  dayDropdown.appendChild(option);
}

const currentYear = new Date().getFullYear();
const startYear = 2000;
const yearDropdown = document.getElementById('year');
for (let year = currentYear; year >= startYear; year--) {
  const option = document.createElement('option');
  option.value = year;
  option.textContent = year;
  yearDropdown.appendChild(option);
}