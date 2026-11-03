import PasswordGenerator from '@smakss/password-generator';
import './styles.css';

const root = document.querySelector<HTMLDivElement>('#app');

if (!root) throw new Error('App root was not found.');

root.innerHTML = [
  '<div class="page">',
  '<header class="topbar"><span class="brand">@smakss/password-generator</span><span class="tag">Local playground</span></header>',
  '<section class="intro"><p class="eyebrow">Private by design</p><h1>Generate strong passwords</h1><p class="subtitle">Tune length and character groups, then generate a batch. Passwords are created locally with the Web Crypto API.</p></section>',
  '<main class="panel"><div class="panel-heading"><div><h2>Password options</h2><p>Choose at least one character group.</p></div></div>',
  '<form id="generator">',
  '<div class="inline-fields">',
  '<div class="field"><label for="length">Password length</label><input id="length" type="number" min="1" max="128" value="20" required></div>',
  '<div class="field"><label for="count">How many passwords?</label><input id="count" type="number" min="1" max="20" value="3" required></div>',
  '</div>',
  '<span class="field-label">Include character groups</span><div class="check-grid">',
  '<label class="check-row"><input id="lower" type="checkbox" checked> Lowercase letters</label>',
  '<label class="check-row"><input id="caps" type="checkbox" checked> Uppercase letters</label>',
  '<label class="check-row"><input id="nums" type="checkbox" checked> Numbers</label>',
  '<label class="check-row"><input id="specs" type="checkbox" checked> Symbols</label>',
  '</div><div class="actions"><button type="submit">Generate passwords</button></div></form>',
  '<p class="status" id="status" role="status"></p><ol class="list" id="results" aria-live="polite"></ol>',
  '</main><footer>Generated in your browser; values are not sent to a server. Copy only the passwords you need.</footer></div>'
].join('');

const form = root.querySelector<HTMLFormElement>('#generator')!;
const results = root.querySelector<HTMLOListElement>('#results')!;
const status = root.querySelector<HTMLParagraphElement>('#status')!;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const length = Number(root.querySelector<HTMLInputElement>('#length')!.value);
  const numberOfPasswords = Number(
    root.querySelector<HTMLInputElement>('#count')!.value
  );
  const options = {
    length,
    numberOfPasswords,
    includeLower: root.querySelector<HTMLInputElement>('#lower')!.checked,
    includeCaps: root.querySelector<HTMLInputElement>('#caps')!.checked,
    includeNums: root.querySelector<HTMLInputElement>('#nums')!.checked,
    includeSpecs: root.querySelector<HTMLInputElement>('#specs')!.checked
  };

  try {
    const generated = PasswordGenerator(options);
    const passwords = Array.isArray(generated) ? generated : [generated];

    results.replaceChildren(
      ...passwords.map((password, index) => {
        const row = document.createElement('li');
        const value = document.createElement('span');
        const copy = document.createElement('button');

        value.className = 'result-value';
        value.textContent = password;
        copy.className = 'secondary';
        copy.type = 'button';
        copy.textContent = 'Copy';
        copy.setAttribute('aria-label', 'Copy password ' + (index + 1));
        copy.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(password);
            status.textContent = 'Copied a password to the clipboard.';
          } catch {
            status.textContent =
              'Clipboard access is unavailable. Select the password to copy it.';
          }
        });

        row.replaceChildren(value, copy);
        return row;
      })
    );
    status.textContent =
      'Generated ' +
      passwords.length +
      ' password' +
      (passwords.length === 1 ? '.' : 's.');
  } catch (error) {
    results.replaceChildren();
    status.textContent =
      error instanceof Error ? error.message : 'Unable to generate passwords.';
  }
});
