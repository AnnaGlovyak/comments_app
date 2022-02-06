export default function renderComment(data) {
    return `<div class="comments__item item">
    <div class="item__name">${data.name}</div>
    <div class="item__text">${data.text}</div>
    <div class="item__created">${data.created.toLocaleString().split(',')[0]}</div>
</div>`;
}