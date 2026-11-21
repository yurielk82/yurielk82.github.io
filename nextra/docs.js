// 원본 nextra-theme-docs 4.6.1이 화면을 띄운 뒤 하는 일(테마 표시, 목차 위치, 메뉴·검색·복사 등)을 그대로 한다.
(() => {
  const root = document.documentElement;
  const isMac = navigator.userAgent.includes("Mac");
  const SUN =
    '<svg fill="currentColor" viewBox="2 2 20 20" stroke="currentColor" height="12"><path stroke-linecap="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>';
  const MOON =
    '<svg fill="currentColor" viewBox="2 2 20 20" stroke="currentColor" height="12"><path stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>';
  const CHECK =
    '<svg viewBox="0 0 20 20" fill="currentColor" height="1em"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>';
  const INFO =
    '<svg viewBox="0 0 16 16" fill="currentColor" height="1.25em" class="x:shrink-0"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>';
  const SPINNER =
    '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" height="20" class="x:shrink-0 x:animate-spin"><circle class="x:opacity-25" cx="12" cy="12" r="10" stroke-width="4"></circle><path class="x:opacity-75" fill="currentColor" stroke="none" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>';
  const COPY =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"></path></svg>';
  const LINK_ARROW =
    '<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" viewBox="0 0 24 24" height="1em"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg>';
  const CHATGPT =
    '<svg viewBox="0 0 20 20" fill="currentColor" width="16"><path d="M11.2475 18.25C10.6975 18.25 10.175 18.1455 9.67999 17.9365C9.18499 17.7275 8.74499 17.436 8.35999 17.062C7.94199 17.205 7.50749 17.2765 7.05649 17.2765C6.31949 17.2765 5.63749 17.095 5.01049 16.732C4.38349 16.369 3.87749 15.874 3.49249 15.247C3.11849 14.62 2.93149 13.9215 2.93149 13.1515C2.93149 12.8325 2.97549 12.486 3.06349 12.112C2.62349 11.705 2.28249 11.2375 2.04049 10.7095C1.79849 10.1705 1.67749 9.6095 1.67749 9.0265C1.67749 8.4325 1.80399 7.8605 2.05699 7.3105C2.30999 6.7605 2.66199 6.2875 3.11299 5.8915C3.57499 5.4845 4.10849 5.204 4.71349 5.05C4.83449 4.423 5.08749 3.862 5.47249 3.367C5.86849 2.861 6.35249 2.465 6.92449 2.179C7.49649 1.893 8.10699 1.75 8.75599 1.75C9.30599 1.75 9.82849 1.8545 10.3235 2.0635C10.8185 2.2725 11.2585 2.564 11.6435 2.938C12.0615 2.795 12.496 2.7235 12.947 2.7235C13.684 2.7235 14.366 2.905 14.993 3.268C15.62 3.631 16.1205 4.126 16.4945 4.753C16.8795 5.38 17.072 6.0785 17.072 6.8485C17.072 7.1675 17.028 7.514 16.94 7.888C17.38 8.295 17.721 8.768 17.963 9.307C18.205 9.835 18.326 10.3905 18.326 10.9735C18.326 11.5675 18.1995 12.1395 17.9465 12.6895C17.6935 13.2395 17.336 13.718 16.874 14.125C16.423 14.521 15.895 14.796 15.29 14.95C15.169 15.577 14.9105 16.138 14.5145 16.633C14.1295 17.139 13.651 17.535 13.079 17.821C12.507 18.107 11.8965 18.25 11.2475 18.25ZM7.17199 16.1875C7.72199 16.1875 8.20049 16.072 8.60749 15.841L11.7095 14.059C11.8195 13.982 11.8745 13.8775 11.8745 13.7455V12.3265L7.88149 14.62C7.63949 14.763 7.39749 14.763 7.15549 14.62L4.03699 12.8215C4.03699 12.8545 4.03149 12.893 4.02049 12.937C4.02049 12.981 4.02049 13.047 4.02049 13.135C4.02049 13.696 4.15249 14.213 4.41649 14.686C4.69149 15.148 5.07099 15.511 5.55499 15.775C6.03899 16.05 6.57799 16.1875 7.17199 16.1875ZM7.33699 13.498C7.40299 13.531 7.46349 13.5475 7.51849 13.5475C7.57349 13.5475 7.62849 13.531 7.68349 13.498L8.92099 12.7885L4.94449 10.4785C4.70249 10.3355 4.58149 10.121 4.58149 9.835V6.2545C4.03149 6.4965 3.59149 6.8705 3.26149 7.3765C2.93149 7.8715 2.76649 8.4215 2.76649 9.0265C2.76649 9.5655 2.90399 10.0825 3.17899 10.5775C3.45399 11.0725 3.81149 11.4465 4.25149 11.6995L7.33699 13.498ZM11.2475 17.161C11.8305 17.161 12.3585 17.029 12.8315 16.765C13.3045 16.501 13.6785 16.138 13.9535 15.676C14.2285 15.214 14.366 14.697 14.366 14.125V10.561C14.366 10.429 14.311 10.33 14.201 10.264L12.947 9.538V14.1415C12.947 14.4275 12.826 14.642 12.584 14.785L9.46549 16.5835C10.0045 16.9685 10.5985 17.161 11.2475 17.161ZM11.8745 11.122V8.878L10.01 7.822L8.12899 8.878V11.122L10.01 12.178L11.8745 11.122ZM7.05649 5.8585C7.05649 5.5725 7.17749 5.358 7.41949 5.215L10.538 3.4165C9.99899 3.0315 9.40499 2.839 8.75599 2.839C8.17299 2.839 7.64499 2.971 7.17199 3.235C6.69899 3.499 6.32499 3.862 6.04999 4.324C5.78599 4.786 5.65399 5.303 5.65399 5.875V9.4225C5.65399 9.5545 5.70899 9.659 5.81899 9.736L7.05649 10.462V5.8585ZM15.4385 13.7455C15.9885 13.5035 16.423 13.1295 16.742 12.6235C17.072 12.1175 17.237 11.5675 17.237 10.9735C17.237 10.4345 17.0995 9.9175 16.8245 9.4225C16.5495 8.9275 16.192 8.5535 15.752 8.3005L12.6665 6.5185C12.6005 6.4745 12.54 6.458 12.485 6.469C12.43 6.469 12.375 6.4855 12.32 6.5185L11.0825 7.2115L15.0755 9.538C15.1965 9.604 15.2845 9.692 15.3395 9.802C15.4055 9.901 15.4385 10.022 15.4385 10.165V13.7455ZM12.122 5.3635C12.364 5.2095 12.606 5.2095 12.848 5.3635L15.983 7.195C15.983 7.118 15.983 7.019 15.983 6.898C15.983 6.37 15.851 5.8695 15.587 5.3965C15.334 4.9125 14.9655 4.5275 14.4815 4.2415C14.0085 3.9555 13.4585 3.8125 12.8315 3.8125C12.2815 3.8125 11.803 3.928 11.396 4.159L8.29399 5.941C8.18399 6.018 8.12899 6.1225 8.12899 6.2545V7.6735L12.122 5.3635Z"></path></svg>';
  const CLAUDE =
    '<svg viewBox="0 0 100 101" fill="currentColor" width="16"><path d="M96.0000 40.0000 L99.5002 42.0000 L99.5002 43.5000 L98.5000 47.0000 L56.0000 57.0000 L52.0040 47.0708 L96.0000 40.0000 M96.0000 40.0000 "></path><path d="M80.1032 10.5903 L84.9968 11.6171 L86.2958 13.2179 L87.5346 17.0540 L87.0213 19.5007 L58.5000 58.5000 L49.0000 49.0000 L75.3008 14.4873 L80.1032 10.5903 M80.1032 10.5903 "></path><path d="M55.5002 4.5000 L58.5005 2.5000 L61.0002 3.5000 L63.5002 7.0000 L56.6511 48.1620 L52.0005 45.0000 L50.0005 39.5000 L53.5003 8.5000 L55.5002 4.5000 M55.5002 4.5000 "></path><path d="M23.4253 5.1588 L26.5075 1.2217 L28.5175 0.7632 L32.5063 1.3458 L34.4748 2.8868 L48.8202 34.6902 L54.0089 49.8008 L47.9378 53.1760 L24.8009 11.1886 L23.4253 5.1588 M23.4253 5.1588 "></path><path d="M8.4990 27.0019 L7.4999 23.0001 L10.5003 19.5001 L14.0003 20.0001 L15.0003 20.0001 L36.0000 35.5000 L42.5000 40.5000 L51.5000 47.5000 L46.5000 56.0000 L42.0002 52.5000 L39.0001 49.5000 L10.0000 29.0001 L8.4990 27.0019 M8.4990 27.0019 "></path><path d="M2.5003 53.0000 L0.2370 50.5000 L0.2373 48.2759 L2.5003 47.5000 L28.0000 49.0000 L53.0000 51.0000 L52.1885 55.9782 L4.5000 53.5000 L2.5003 53.0000 M2.5003 53.0000 "></path><path d="M17.5002 79.0264 L12.5005 79.0264 L10.5124 76.7369 L10.5124 74.0000 L19.0005 68.0000 L53.5082 46.0337 L57.0005 52.0000 L17.5002 79.0264 M17.5002 79.0264 "></path><path d="M27.0004 92.9999 L25.0003 93.4999 L22.0003 91.9999 L22.5004 89.4999 L52.0003 50.5000 L56.0004 55.9999 L34.0003 85.0000 L27.0004 92.9999 M27.0004 92.9999 "></path><path d="M51.9998 98.0000 L50.5002 100.0000 L47.5002 101.0000 L45.0001 99.0000 L43.5000 96.0000 L51.0003 55.4999 L55.5001 55.9999 L51.9998 98.0000 M51.9998 98.0000 "></path><path d="M77.5007 86.9997 L77.5007 90.9997 L77.0006 92.4997 L75.0004 93.4997 L71.5006 93.0339 L47.4669 57.2642 L56.9998 50.0002 L64.9994 64.5004 L65.7507 69.7497 L77.5007 86.9997 M77.5007 86.9997 "></path><path d="M89.0008 80.9991 L89.5008 83.4991 L88.0008 85.4991 L86.5007 84.9991 L78.0007 78.9991 L65.0007 67.4991 L55.0007 60.4991 L58.0000 51.0000 L62.9999 54.0001 L66.0007 59.4991 L89.0008 80.9991 M89.0008 80.9991 "></path><path d="M82.5003 55.5000 L95.0003 56.5000 L98.0003 58.5000 L100.0000 61.5000 L100.0000 63.6587 L94.5003 66.0000 L66.5005 59.0000 L55.0003 58.5000 L58.0000 48.0000 L66.0005 54.0000 L82.5003 55.5000 M82.5003 55.5000 "></path></svg>';

  const TOC_INACTIVE = [
    "x:text-gray-600",
    "x:hover:text-gray-900",
    "x:dark:text-gray-400",
    "x:dark:hover:text-gray-300",
  ];
  const TOC_ACTIVE = [
    "x:text-primary-600",
    "x:contrast-more:text-primary-600!",
  ];
  const SELECT_CLOSED = ["x:text-gray-600", "x:dark:text-gray-400"];
  const SELECT_OPEN = [
    "x:bg-gray-200",
    "x:text-gray-900",
    "x:dark:bg-primary-100/10",
    "x:dark:text-gray-50",
  ];
  const LISTBOX =
    "x:focus-visible:nextra-focus x:opacity-100 x:motion-reduce:transition-none x:transition-opacity x:min-w-(--button-width) x:z-30 x:max-h-64 x:rounded-md x:border x:border-black/5 x:backdrop-blur-md x:bg-nextra-bg/70 x:py-1 x:text-sm x:shadow-lg x:dark:border-white/20";
  const OPTION =
    "x:cursor-pointer x:whitespace-nowrap x:py-1.5 x:px-3 x:transition-colors";
  const OPTION_IDLE = "x:text-gray-800 x:dark:text-gray-100";
  const OPTION_FOCUS =
    "x:bg-primary-100 x:text-primary-800 x:dark:text-primary-500 x:dark:bg-primary-500/10";
  const SEARCH_PANEL =
    "nextra-search-results nextra-scrollbar x:max-md:h-full x:border x:border-gray-200 x:text-gray-100 x:dark:border-neutral-800 x:z-30 x:rounded-xl x:py-2.5 x:shadow-xl x:contrast-more:border x:contrast-more:border-gray-900 x:contrast-more:dark:border-gray-50 x:backdrop-blur-md x:bg-nextra-bg/70 x:motion-reduce:transition-none x:origin-top x:transition x:duration-200 x:ease-out x:data-closed:scale-95 x:data-closed:opacity-0 x:empty:invisible";
  const SEARCH_INPUT_IDLE = ["x:bg-black/[.05]", "x:dark:bg-gray-50/10"];
  const SEARCH_INPUT_FOCUS = ["x:bg-transparent", "x:nextra-focus"];
  const swap = (el, off, on) => {
    el.classList.remove(...off);
    el.classList.add(...on);
  };
  const escapeHtml = (s) =>
    s.replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
        })[c],
    );

  // 떠 있는 목록: headlessui 포털과 같은 자리에 붙인다.
  let popup = null;
  const closePopup = (restoreFocus = true) => {
    if (!popup) return;
    const { portal, owner, onClose, returnFocus } = popup;
    popup = null;
    portal.remove();
    if (onClose) onClose();
    if (owner) {
      owner.setAttribute("aria-expanded", "false");
      if (returnFocus && restoreFocus) owner.focus({ preventScroll: true });
    }
  };
  const openPopup = (
    panel,
    anchor,
    placement,
    gap,
    padding,
    owner,
    onClose,
  ) => {
    closePopup();
    const portalRoot = document.createElement("div");
    portalRoot.id = "headlessui-portal-root";
    const portal = document.createElement("div");
    portal.setAttribute("data-headlessui-portal", "");
    portalRoot.append(portal);
    portal.append(panel);
    document.body.append(portalRoot);
    popup = {
      portal: portalRoot,
      owner,
      onClose,
      panel,
      anchor,
      placement,
      gap,
      padding,
    };
    if (owner) owner.setAttribute("aria-expanded", "true");
    place();
  };
  const place = () => {
    if (!popup) return;
    const { panel, anchor, placement, gap, padding } = popup;
    const a = anchor.getBoundingClientRect();
    panel.style.position = "absolute";
    panel.style.setProperty("--button-width", `${a.width}px`);
    panel.style.overflow = "auto";
    panel.style.maxWidth = `${innerWidth - 2 * padding}px`;
    const [side, align] = placement.split(" ");
    const p = panel.getBoundingClientRect();
    let left = align === "end" ? a.right - p.width : a.left;
    left = Math.min(Math.max(left, padding), innerWidth - padding - p.width);
    const top = side === "top" ? a.top - gap - p.height : a.bottom + gap;
    panel.style.maxHeight =
      side === "top"
        ? `min(var(--anchor-max-height, 100vh), ${Math.round(a.top - gap - padding)}px)`
        : `${Math.round(innerHeight - a.bottom - gap - padding)}px`;
    panel.style.left = `${Math.round(left + scrollX)}px`;
    panel.style.top = `${Math.round(top + scrollY)}px`;
  };
  addEventListener("resize", place);
  addEventListener("scroll", place, { passive: true });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePopup();
  });
  // headlessui useOutsideClick: 바깥에서 누르고 뗀 click에 닫고, 누른 곳이 초점을
  // 받지 못하면 단추로 초점을 돌려준다.
  const outside = (target) =>
    popup &&
    !popup.portal.contains(target) &&
    !(popup.anchor && popup.anchor.contains(target));
  let pressedOutside = null;
  document.addEventListener(
    "mousedown",
    (e) => {
      pressedOutside = outside(e.target) ? e.target : null;
    },
    true,
  );
  document.addEventListener(
    "click",
    (e) => {
      const target = pressedOutside;
      pressedOutside = null;
      if (!target || !outside(e.target)) return;
      const { owner, returnFocus } = popup;
      closePopup(false);
      const focusable = target.closest(
        "a[href],button,input,select,textarea,[tabindex],[contenteditable]",
      );
      if (returnFocus && owner && !focusable)
        owner.focus({ preventScroll: true });
    },
    true,
  );

  // headlessui Listbox 단추는 누르는 순간 열고 단추에 초점을 주지 않는다.
  // 키보드(Enter·Space)는 click으로 들어온다.
  const onPress = (button, toggle) => {
    button.addEventListener("mousedown", (e) => {
      if (e.button !== 0) return;
      e.preventDefault();
      toggle();
    });
    button.addEventListener("click", (e) => {
      if (e.detail === 0) toggle();
    });
  };

  const listbox = (button, options, value, placement, onChange) => {
    const ul = document.createElement("ul");
    ul.className = LISTBOX;
    ul.setAttribute("role", "listbox");
    ul.setAttribute("data-anchor", placement);
    for (const option of options) {
      const li = document.createElement("li");
      const selected = option.id === value;
      li.className = `${selected ? OPTION_FOCUS : OPTION_IDLE} ${OPTION}${selected ? " x:flex x:items-center x:justify-between x:gap-3" : ""}`;
      li.setAttribute("role", "option");
      li.tabIndex = -1;
      li.setAttribute("aria-selected", String(selected));
      li.innerHTML = option.name + (selected ? CHECK : "");
      li.addEventListener("mouseenter", () => {
        for (const other of ul.children)
          other.className = other.className.replace(OPTION_FOCUS, OPTION_IDLE);
        li.className = li.className.replace(OPTION_IDLE, OPTION_FOCUS);
      });
      li.addEventListener("click", () => {
        closePopup();
        onChange(option.id);
      });
      ul.append(li);
    }
    swap(button, SELECT_CLOSED, SELECT_OPEN);
    openPopup(ul, button, placement, 10, 0, button, () =>
      swap(button, SELECT_OPEN, SELECT_CLOSED),
    );
    // headlessui Listbox처럼 열린 목록에 초점을 주고, 닫히면 단추로 돌려준다.
    popup.returnFocus = true;
    ul.tabIndex = 0;
    ul.focus({ preventScroll: true });
  };

  // 테마: 공개 홈과 같은 저장 키(portfolio-theme). 홈은 light·dark만 읽으므로 system은 지운다.
  const storedTheme = () => {
    try {
      return localStorage.getItem("portfolio-theme") || "system";
    } catch {
      return "system";
    }
  };
  const resolved = (theme) =>
    theme === "system"
      ? matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;
  const THEME_NAMES = { light: "Light", dark: "Dark", system: "System" };
  const renderThemeSwitches = () => {
    const theme = storedTheme();
    for (const button of document.querySelectorAll(
      'button[title="Change theme"]',
    )) {
      const lite = button.dataset.lite === "true";
      button.innerHTML =
        (resolved(theme) === "dark" ? MOON : SUN) +
        (lite ? "" : THEME_NAMES[theme]);
    }
  };
  const setTheme = (theme) => {
    const css = document.createElement("style");
    css.append(
      document.createTextNode(
        "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
      ),
    );
    document.head.append(css);
    try {
      if (theme === "system") localStorage.removeItem("portfolio-theme");
      else localStorage.setItem("portfolio-theme", theme);
    } catch {}
    const value = resolved(theme);
    root.classList.remove("light", "dark");
    root.classList.add(value);
    root.style.colorScheme = value;
    renderThemeSwitches();
    getComputedStyle(document.body);
    setTimeout(() => css.remove(), 1);
  };
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (storedTheme() === "system") setTheme("system");
  });
  for (const button of document.querySelectorAll(
    'button[title="Change theme"]',
  )) {
    onPress(button, () => {
      if (popup && popup.anchor === button) return closePopup();
      listbox(
        button,
        Object.entries(THEME_NAMES).map(([id, name]) => ({ id, name })),
        storedTheme(),
        "top start",
        setTheme,
      );
    });
  }
  renderThemeSwitches();

  // 검색: 원본과 같이 /_pagefind/pagefind.js를 불러 찾는다.
  const searchInputs = [...document.querySelectorAll(".nextra-search input")];
  for (const input of searchInputs) {
    const kbd = input.nextElementSibling;
    if (isMac) kbd.innerHTML = '<span class="x:text-xs">⌘</span>K';
    kbd.classList.remove("x:invisible", "x:opacity-0");
    let panel = null;
    let token = 0;
    const show = (html, mode) => {
      if (!panel || !panel.isConnected) {
        panel = document.createElement("div");
        panel.setAttribute("role", "listbox");
        panel.setAttribute("data-anchor", "bottom end");
        panel.style.setProperty("--input-width", `${input.offsetWidth}px`);
        panel.setAttribute("data-closed", "");
        openPopup(panel, input, "bottom end", 10, 16, input, null);
        requestAnimationFrame(
          () => panel && panel.removeAttribute("data-closed"),
        );
      }
      const extra =
        mode === "list"
          ? "x:md:max-h-[min(calc(100vh-5rem),400px)]!"
          : `x:md:min-h-28 x:grow x:flex x:justify-center x:text-sm x:gap-2 x:px-8 ${mode === "error" ? "x:text-red-500 x:items-start" : "x:text-gray-400 x:items-center"}`;
      panel.className = `${SEARCH_PANEL} ${extra} x:w-full x:md:w-[576px]`;
      panel.innerHTML = html;
      place();
    };
    const run = async (value) => {
      const mine = ++token;
      if (!value) {
        if (panel) panel.innerHTML = "";
        return;
      }
      show(`${SPINNER}Loading…`, "loading");
      try {
        if (!window.pagefind) {
          window.pagefind = await import("/_pagefind/pagefind.js");
          await window.pagefind.options({ baseUrl: "/" });
        }
      } catch (error) {
        if (mine !== token) return;
        const message =
          error instanceof Error
            ? `${error.constructor.name}: ${error.message}`
            : String(error);
        show(
          `${INFO}<div class="x:grid"><b class="x:mb-2">Failed to load search index.</b>${escapeHtml(message)}</div>`,
          "error",
        );
        return;
      }
      const response = await window.pagefind.debouncedSearch(value);
      if (!response || mine !== token) return;
      const data = await Promise.all(response.results.map((r) => r.data()));
      if (mine !== token) return;
      if (!data.length) return show("No results found.", "empty");
      show(
        data
          .map(
            (d) =>
              `<div class="x:mx-2.5 x:mb-2 x:not-first:mt-6 x:select-none x:border-b x:border-black/10 x:px-2.5 x:pb-1.5 x:text-xs x:font-semibold x:uppercase x:text-gray-600 x:dark:border-white/20 x:dark:text-gray-300 x:contrast-more:border-gray-600 x:contrast-more:text-gray-900 x:contrast-more:dark:border-gray-50 x:contrast-more:dark:text-gray-50">${escapeHtml(d.meta.title)}</div>` +
              d.sub_results
                .map((s) => {
                  const url = s.url
                    .replace(/\.html$/, "")
                    .replace(/\.html#/, "#");
                  return `<a class="x:mx-2.5 x:break-words x:rounded-md x:contrast-more:border x:text-gray-800 x:dark:text-gray-300 x:contrast-more:border-transparent x:block x:scroll-m-12 x:px-2.5 x:py-2" href="${escapeHtml(url)}"><div class="x:text-base x:font-semibold x:leading-5">${escapeHtml(s.title)}</div><div class="x:mt-1 x:text-sm x:leading-[1.35rem] x:text-gray-600 x:dark:text-gray-400 x:contrast-more:dark:text-gray-50 x:[&amp;_mark]:bg-primary-600/80 x:[&amp;_mark]:text-white">${s.excerpt}</div></a>`;
                })
                .join(""),
          )
          .join(""),
        "list",
      );
    };
    input.addEventListener("input", () => run(input.value));
    input.addEventListener("focus", () => {
      kbd.classList.add("x:invisible", "x:opacity-0");
      swap(input, SEARCH_INPUT_IDLE, SEARCH_INPUT_FOCUS);
    });
    input.addEventListener("blur", () => {
      kbd.classList.remove("x:invisible", "x:opacity-0");
      swap(input, SEARCH_INPUT_FOCUS, SEARCH_INPUT_IDLE);
    });
  }
  addEventListener("keydown", (event) => {
    const el = document.activeElement;
    if (
      !el ||
      ["INPUT", "SELECT", "BUTTON", "TEXTAREA"].includes(el.tagName) ||
      el.isContentEditable
    )
      return;
    if (
      event.key === "/" ||
      (event.key === "k" &&
        !event.shiftKey &&
        (isMac ? event.metaKey : event.ctrlKey))
    ) {
      event.preventDefault();
      const visible =
        searchInputs.find((i) => i.offsetParent !== null) || searchInputs[0];
      visible.focus({ preventScroll: true });
    }
  });

  // 메뉴 펼침·접힘: nextra Collapse와 같은 높이 움직임.
  const collapse = (container, open) => {
    clearTimeout(container._timer);
    const child = container.children[0];
    container.style.height = `${child.clientHeight}px`;
    container.style.transitionDuration = open ? "500ms" : "300ms";
    if (open) {
      swap(container, ["x:opacity-0", "x:overflow-hidden"], ["x:opacity-100"]);
      container._timer = setTimeout(
        () => container.style.removeProperty("height"),
        500,
      );
    } else {
      swap(container, ["x:opacity-100"], ["x:opacity-0", "x:overflow-hidden"]);
      requestAnimationFrame(() => {
        container.style.height = "0";
      });
    }
  };
  const ROTATE = ["x:ltr:rotate-90", "x:rtl:-rotate-270"];
  for (const toggle of document.querySelectorAll(
    ".nextra-sidebar li > button[data-href], .nextra-mobile-nav li > button[data-href]",
  )) {
    toggle.addEventListener("click", () => {
      const li = toggle.parentElement;
      const open = !li.classList.contains("open");
      li.classList.toggle("open", open);
      const arrow = toggle.querySelector("svg");
      if (open) arrow.classList.add(...ROTATE);
      else arrow.classList.remove(...ROTATE);
      collapse(toggle.nextElementSibling, open);
    });
  }

  // 모바일 메뉴
  const mobile = document.querySelector(".nextra-mobile-nav");
  const hamburger = document.querySelector(".nextra-hamburger");
  const setMenu = (open) => {
    root.classList.toggle("x:max-md:overflow-hidden", open);
    mobile.classList.toggle("x:[transform:translate3d(0,0,0)]", open);
    mobile.classList.toggle("x:[transform:translate3d(0,-100%,0)]", !open);
    hamburger.querySelector("svg").setAttribute("class", open ? "open" : "");
    if (open) {
      const active = mobile.querySelector("li.active");
      if (active) centerIn(active, mobile.querySelector(":scope > ul"));
    }
  };
  hamburger.addEventListener("click", () =>
    setMenu(!mobile.classList.contains("x:[transform:translate3d(0,0,0)]")),
  );
  for (const link of mobile.querySelectorAll("a[href]"))
    link.addEventListener("click", () => setMenu(false));

  // 데스크톱 메뉴: 현재 쪽을 가운데로, 접기 단추
  const centerIn = (el, scroller) => {
    const box = scroller.getBoundingClientRect();
    const target = el.getBoundingClientRect();
    const max = scroller.scrollHeight - scroller.clientHeight;
    const next =
      scroller.scrollTop +
      target.top -
      box.top -
      (scroller.clientHeight - target.height) / 2;
    scroller.scrollTop = Math.min(Math.max(next, 0), max);
  };
  const sidebar = document.querySelector("aside.nextra-sidebar");
  const sidebarScroller = sidebar.firstElementChild;
  if (innerWidth >= 768) {
    const active = sidebarScroller.querySelector("li.active");
    if (active) centerIn(active, sidebarScroller);
  }
  const sidebarToggle = sidebar.querySelector(
    'button[title="Collapse sidebar"]',
  );
  let expanded = true;
  sidebarToggle.addEventListener("click", () => {
    expanded = !expanded;
    swap(
      sidebar,
      [expanded ? "x:w-20" : "x:w-64"],
      [expanded ? "x:w-64" : "x:w-20"],
    );
    sidebarScroller.classList.toggle("no-scrollbar", !expanded);
    const footer = sidebarToggle.parentElement;
    footer.classList.toggle("x:flex-wrap", !expanded);
    footer.classList.toggle("x:justify-center", !expanded);
    footer.classList.add("x:*:opacity-0");
    footer.classList.remove(
      "x:*:animate-[fade-in_1s_ease_.2s_forwards]",
      "x:*:animate-[fade-in2_1s_ease_.2s_forwards]",
    );
    footer.classList.add(
      expanded
        ? "x:*:animate-[fade-in_1s_ease_.2s_forwards]"
        : "x:*:animate-[fade-in2_1s_ease_.2s_forwards]",
    );
    const theme = footer.querySelector('button[title="Change theme"]');
    theme.dataset.lite = String(!expanded);
    theme.classList.toggle("x:grow", expanded);
    renderThemeSwitches();
    sidebarToggle.title = expanded ? "Collapse sidebar" : "Expand sidebar";
    sidebarToggle.setAttribute("aria-expanded", String(expanded));
    sidebarToggle
      .querySelector("svg")
      .setAttribute(
        "class",
        expanded ? "" : "x:*:first:origin-[35%] x:*:first:rotate-180",
      );
    const holder = sidebarScroller.firstElementChild;
    if (holder) {
      const child = holder.firstElementChild;
      child.style.width = `${child.clientWidth}px`;
      holder.style.width = `${child.clientWidth}px`;
      holder.style.transitionDuration = expanded ? "500ms" : "300ms";
      swap(
        holder,
        expanded ? ["x:opacity-0", "x:overflow-hidden"] : ["x:opacity-100"],
        expanded ? ["x:opacity-100"] : ["x:opacity-0", "x:overflow-hidden"],
      );
      if (!expanded) requestAnimationFrame(() => (holder.style.width = "0"));
    }
  });

  // 목차: 화면 위쪽 20%에 들어온 제목을 표시하고, 세 번째 제목부터 맨 위로 단추를 보인다.
  const tocLinks = [...document.querySelectorAll(".nextra-toc ul a")];
  const backToTop = document.querySelector(
    ".nextra-toc button[aria-hidden], .nextra-toc div > button",
  );
  const setActive = (slug) => {
    let index = -1;
    tocLinks.forEach((link, i) => {
      const on = decodeURI(link.hash.slice(1)) === slug;
      if (on) index = i;
      if (on) swap(link, TOC_INACTIVE, TOC_ACTIVE);
      else swap(link, TOC_ACTIVE, TOC_INACTIVE);
    });
    if (backToTop) {
      const hidden = index < 2;
      backToTop.disabled = hidden;
      if (hidden) backToTop.setAttribute("aria-hidden", "true");
      else backToTop.removeAttribute("aria-hidden");
      swap(
        backToTop,
        [hidden ? "x:opacity-100" : "x:opacity-0"],
        [hidden ? "x:opacity-0" : "x:opacity-100"],
      );
    }
    const anchor = tocLinks[index];
    const list = anchor && anchor.closest("ul");
    if (anchor && list) {
      const a = anchor.getBoundingClientRect();
      const b = list.getBoundingClientRect();
      if (a.top < b.top || a.bottom > b.bottom)
        list.scrollBy({
          top: a.top - b.top - (b.height - a.height) / 2,
          behavior: "smooth",
        });
    }
  };
  const navbarHeight =
    getComputedStyle(document.body).getPropertyValue(
      "--nextra-navbar-height",
    ) || "0%";
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries.find((e) => e.isIntersecting);
      if (entry) setActive(decodeURI(entry.target.hash.slice(1)));
    },
    { rootMargin: `-${navbarHeight} 0% -80%` },
  );
  for (const anchor of document.querySelectorAll(".subheading-anchor"))
    observer.observe(anchor);
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      scrollTo({ top: 0, behavior: "smooth" });
      backToTop
        .closest("ul, div.x\\:grid")
        ?.parentElement?.scrollTo({ top: 0, behavior: "smooth" });
      backToTop.disabled = true;
    });
  }

  // 코드 줄바꿈 단추
  for (const button of document.querySelectorAll(
    'button[title="Toggle word wrap"]',
  )) {
    button.addEventListener("click", () => {
      if ("nextraWordWrap" in root.dataset) delete root.dataset.nextraWordWrap;
      else root.dataset.nextraWordWrap = "";
    });
  }

  // 쪽 복사
  const source = JSON.parse(
    document.getElementById("nextra-source")?.textContent || '""',
  );
  const copyGroup = document.querySelector("article > div.x\\:float-end");
  if (copyGroup) {
    const [copyButton, menuButton] = copyGroup.querySelectorAll("button");
    let timer = 0;
    const copy = async () => {
      try {
        await navigator.clipboard.writeText(source);
      } catch {
        return;
      }
      copyButton.lastChild.textContent = "Copied";
      copyButton.classList.add("x:opacity-70");
      clearTimeout(timer);
      timer = setTimeout(() => {
        copyButton.lastChild.textContent = "Copy page";
        copyButton.classList.remove("x:opacity-70");
      }, 2000);
    };
    copyButton.addEventListener("click", copy);
    const item = (icon, title, description, external) =>
      `<div class="x:flex x:gap-3 x:items-center">${icon}<div class="x:flex x:flex-col"><span class="x:font-medium x:flex x:gap-1">${title}${external ? LINK_ARROW : ""}</span><span class="x:text-xs">${description}</span></div></div>`;
    onPress(menuButton, () => {
      if (popup && popup.anchor === menuButton) return closePopup();
      listbox(
        menuButton,
        [
          {
            id: "copy",
            name: item(
              COPY,
              "Copy page",
              "Copy page as Markdown for LLMs",
              false,
            ),
          },
          {
            id: "chatgpt",
            name: item(
              CHATGPT,
              "Open in ChatGPT",
              "Ask questions about this page",
              true,
            ),
          },
          {
            id: "claude",
            name: item(
              CLAUDE,
              "Open in Claude",
              "Ask questions about this page",
              true,
            ),
          },
        ],
        "",
        "bottom end",
        (value) => {
          if (value === "copy") return copy();
          const url =
            value === "chatgpt"
              ? "chatgpt.com/?hints=search&prompt"
              : "claude.ai/new?q";
          const query = `Read from ${location.href} so I can ask questions about it.`;
          window.open(`https://${url}=${encodeURIComponent(query)}`, "_blank");
        },
      );
    });
  }
})();

// 그림 확대: nextra ImageZoom(react-medium-image-zoom 5.4.1, zoomMargin 40, zoomImg=원본)이 하는 일.
(() => {
  const MARGIN = 40;
  const ENLARGE =
    '<svg aria-hidden="true" data-rmiz-btn-zoom-icon="true" fill="currentColor" focusable="false" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z"></path></svg>';
  const COMPRESS =
    '<svg aria-hidden="true" data-rmiz-btn-unzoom-icon="true" fill="currentColor" focusable="false" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z"></path></svg>';
  const portal = () => {
    let el = document.querySelector("[data-rmiz-portal]");
    if (!el) {
      el = document.createElement("div");
      el.setAttribute("data-rmiz-portal", "");
      document.body.append(el);
    }
    return el;
  };
  const gen4 = () => Math.random().toString(16).slice(-4);

  const setup = (wrap) => {
    const content = wrap.querySelector("[data-rmiz-content]");
    const img = content?.querySelector("img");
    if (!img) return;
    const id = gen4() + gen4() + gen4();
    wrap.setAttribute("aria-owns", `rmiz-modal-${id}`);

    const ghost = document.createElement("span");
    ghost.setAttribute("data-rmiz-ghost", "");
    const zoomBtn = document.createElement("button");
    zoomBtn.setAttribute(
      "aria-label",
      img.alt ? `Expand image: ${img.alt}` : "Expand image",
    );
    zoomBtn.setAttribute("data-rmiz-btn-zoom", "");
    zoomBtn.type = "button";
    zoomBtn.innerHTML = ENLARGE;
    ghost.append(zoomBtn);

    const dialog = document.createElement("dialog");
    dialog.setAttribute("aria-labelledby", `rmiz-modal-img-${id}`);
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("data-rmiz-modal", "");
    dialog.id = `rmiz-modal-${id}`;
    dialog.setAttribute("role", "dialog");
    const overlay = document.createElement("div");
    overlay.setAttribute("data-rmiz-modal-overlay", "hidden");
    const modalContent = document.createElement("div");
    modalContent.setAttribute("data-rmiz-modal-content", "");
    const modalImg = document.createElement("img");
    modalImg.alt = img.alt;
    modalImg.setAttribute("sizes", "");
    modalImg.setAttribute("data-rmiz-modal-img", "");
    modalImg.id = `rmiz-modal-img-${id}`;
    const unzoomBtn = document.createElement("button");
    unzoomBtn.setAttribute("aria-label", "Minimize image");
    unzoomBtn.setAttribute("data-rmiz-btn-unzoom", "");
    unzoomBtn.type = "button";
    unzoomBtn.innerHTML = COMPRESS;
    modalContent.append(modalImg, unzoomBtn);
    dialog.append(overlay, modalContent);

    let state = "UNLOADED";
    let refresh = false;
    let bodyAttrs = { overflow: "", width: "" };
    let touchYStart;
    let scaling = false;
    let timer;

    const ghostStyle = () => {
      Object.assign(ghost.style, {
        height: `${img.offsetHeight}px`,
        left: `${img.offsetLeft}px`,
        width: `${img.offsetWidth}px`,
        top: `${img.offsetTop}px`,
      });
    };
    // utils.js getStyleModalImg: 원본 그림이 있어 창 크기에 맞춰 키운다(hasScalableSrc).
    const modalStyle = (zoomed) => {
      const rect = img.getBoundingClientRect();
      const scale =
        rect.width && rect.height
          ? Math.min(
              (window.innerWidth - MARGIN * 2) / rect.width,
              (window.innerHeight - MARGIN * 2) / rect.height,
            )
          : 1;
      const width = rect.width * scale;
      const height = rect.height * scale;
      const style = {
        top: `${rect.top}px`,
        left: `${rect.left}px`,
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(0,0) scale(${1 / scale})`,
        transitionDuration: "",
      };
      if (zoomed) {
        const x = window.innerWidth / 2 - (rect.left + width / 2);
        const y = window.innerHeight / 2 - (rect.top + height / 2);
        if (refresh) style.transitionDuration = "0.01ms";
        style.transform = `translate(${x}px,${y}px) scale(1)`;
      }
      Object.assign(modalImg.style, style);
      modalImg.setAttribute("width", String(width || ""));
      modalImg.setAttribute("height", String(height || ""));
    };

    const render = () => {
      content.style.visibility = state === "UNLOADED" ? "visible" : "hidden";
      overlay.setAttribute(
        "data-rmiz-modal-overlay",
        state === "UNLOADED" || state === "UNLOADING" ? "hidden" : "visible",
      );
      modalStyle(state === "LOADING" || state === "LOADED");
    };

    const onKey = (e) => {
      if (e.key === "Escape" || e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();
        unzoom();
      }
    };
    const onWheel = (e) => {
      if (e.ctrlKey) return;
      e.stopPropagation();
      queueMicrotask(unzoom);
    };
    const onTouchStart = (e) => {
      if (e.touches.length > 1) {
        scaling = true;
        return;
      }
      if (e.changedTouches.length === 1)
        touchYStart = e.changedTouches[0].screenY;
    };
    const onTouchMove = (e) => {
      const browserScale = window.visualViewport?.scale ?? 1;
      if (
        !scaling &&
        browserScale <= 1 &&
        touchYStart != null &&
        e.changedTouches[0]
      ) {
        if (Math.abs(touchYStart - e.changedTouches[0].screenY) > 10) {
          touchYStart = undefined;
          unzoom();
        }
      }
    };
    const onTouchEnd = () => {
      scaling = false;
      touchYStart = undefined;
    };
    const onResize = () => {
      refresh = true;
      render();
    };
    const touch = { passive: true };

    const transitionEnd = () => {
      clearTimeout(timer);
      if (state === "LOADING") {
        state = "LOADED";
        window.addEventListener("wheel", onWheel, touch);
      } else if (state === "UNLOADING") {
        refresh = false;
        state = "UNLOADED";
        document.body.style.width = bodyAttrs.width;
        document.body.style.overflow = bodyAttrs.overflow;
        window.removeEventListener("resize", onResize);
        modalImg.removeEventListener("transitionend", transitionEnd);
        dialog.close();
      }
      render();
    };

    const zoom = () => {
      if (state !== "UNLOADED" || getComputedStyle(img).display === "none")
        return;
      bodyAttrs = {
        overflow: document.body.style.overflow,
        width: document.body.style.width,
      };
      const clientWidth = document.body.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.width = `${clientWidth}px`;
      modalStyle(false);
      dialog.showModal();
      modalImg.addEventListener("transitionend", transitionEnd);
      modalImg.getBoundingClientRect();
      state = "LOADING";
      render();
      window.addEventListener("resize", onResize, touch);
      window.addEventListener("touchstart", onTouchStart, touch);
      window.addEventListener("touchmove", onTouchMove, touch);
      window.addEventListener("touchend", onTouchEnd, touch);
      window.addEventListener("touchcancel", onTouchEnd, touch);
      document.addEventListener("keydown", onKey, true);
    };

    function unzoom() {
      if (state !== "LOADING" && state !== "LOADED") return;
      state = "UNLOADING";
      render();
      const td = getComputedStyle(modalImg).transitionDuration;
      const seconds = parseFloat(td);
      if (seconds)
        timer = setTimeout(
          transitionEnd,
          seconds * (td.endsWith("ms") ? 1 : 1000) + 50,
        );
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
      document.removeEventListener("keydown", onKey, true);
    }

    img.addEventListener("click", zoom);
    zoomBtn.addEventListener("click", zoom);
    unzoomBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      unzoom();
    });
    dialog.addEventListener("click", (e) => {
      if (e.target === modalContent || e.target === modalImg) {
        e.stopPropagation();
        unzoom();
      }
    });
    dialog.addEventListener("cancel", (e) => e.preventDefault());
    dialog.addEventListener("close", (e) => {
      e.stopPropagation();
      unzoom();
    });

    const found = () => {
      content.setAttribute("data-rmiz-content", "found");
      if (!ghost.isConnected) wrap.append(ghost);
      if (!dialog.isConnected) portal().append(dialog);
      modalImg.src = img.currentSrc || img.src;
      ghostStyle();
      render();
    };
    new ResizeObserver(ghostStyle).observe(img);
    const probe = new Image();
    probe.src = img.currentSrc || img.src;
    probe.decode().then(found, () => {
      if (probe.complete && probe.naturalHeight !== 0) found();
      else probe.onload = found;
    });
  };

  document.querySelectorAll("[data-rmiz]").forEach(setup);
})();
