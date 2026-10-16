import { menuWithPrices } from '@acme/shared';
import './style.css';

document.querySelector('#menu').innerHTML = menuWithPrices()
  .map((m) => `<li><span>${m.item}</span><strong>${m.price}</strong></li>`)
  .join('');
