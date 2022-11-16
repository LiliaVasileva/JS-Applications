const section = document.getElementById('register-view');
section.remove();

export function showResisterView() {
    document.querySelector('main').appendChild(section);
}