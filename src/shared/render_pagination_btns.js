export default function renderPaginationBtns() {
    return `
      <li class="pagination__item first">
          First
      </li>
      <li class="pagination__item previous">«
      </li>
      <li class="pagination__item active current">1
      </li>
      <li class="pagination__item second">2
      </li>
      <li class="pagination__item third">3
      </li>
      <li class="pagination__item next">»
      </li>
      <li class="pagination__item last">
          Last
      </li>`;
}