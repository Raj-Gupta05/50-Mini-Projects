const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		RemoveAllClasses();
		panel.classList.add('active');
	});
});
function RemoveAllClasses() {
	panels.forEach((panel) => {
		panel.classList.remove('active');
	});
}
