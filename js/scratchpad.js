// Scratchpad Intro
//--------------------------------------------------------------------------------
const intro = [
  `
  <!-- 
  
  :: Resume ::

  {
    "name": 'Ricardo Guillen I.',
    "job_title": 'Senior Front-End Developer',
    "motto": 'Coffee, Code, Sleep, Repeat',
    "skills": [
      "web_development": {
        "Javascript": [
          "ReactJs",
          "NextJs",
          "VueJs",
          "NuxtJs",
          "NodeJs",
          "TypeScript"
        ],
        "databases": [
          "MongoDB",
          "MySQL",
          "PostgreSQL",
          "GraphQL"
        ]
      },
      "web_design": [
        "TailwindCSS",
        "HTML5",
        "CSS3",
        "Figma"
      ]
    ]
  } 
    ::Keep Scrolling Down:: 
    -->

 <div class="wrapper">
    <img class="avatar" src="./assets/imgs/JPG/logo.jpg" title="Ricardo GI, Senior Front-End Developer" />

    <div class="content">
      <section class="headings">
        <h1 class="title">Ricardo Guillen I.</h1>
        <h2 class="subtitle">Senior Front-End Developer</h2>
        
        <div class="networks">
          <a class="networks__item" href="https://linkedin.com/in/ryarturogi" title="LinkedIn" target="_blank">
            <img class="networks__item-icon" src="./assets/imgs/SVG/linkedin-in.svg" title="LinkedIn" />
          </a>

          <a class="networks__item" href="https://github.com/ryarturogi" title="Github" target="_blank">
            <img class="networks__item-icon" src="./assets/imgs/SVG/github.svg" title="Github" />
          </a> 

           <a class="networks__item" href="https://twitter.com/ryarturogi" title="Twitter" target="_blank">
            <img class="networks__item-icon" src="./assets/imgs/SVG/twitter.svg" title="Twitter" />
          </a>
        </div>
      </section>

      <section class="skills">
        <hgroup>
          <h2>
            <strong>Stack ⚡</strong>
          </h2>

          <div>
            Javascript/Typscript, React, Next.js, Vue, Nuxt.js, Node.js, MySQL, NoSQL, GraphQL, TailwindCSS, Figma.
          </div>
        </hgroup>
      </section>
    </div>

    <a class="contact-action" href="mailto:r.arturogi@gmail.com" title="Contact me!" target="_blank">Drop a message <span class="contact-action__icon">📩</span></a>

  </div>


<style>
/*  
  CSS TABLE OF CONTENTS
   
   0.0 - Root
   1.0 - Reset
   2.0 - Avatar
   3.0 - Headings
   4.0 - Networks
   5.0 - Skills
   6.0 - Contact
   
  */

/* 0.0 - Root */

:root {
  /* colors */
  --main-bg-color: #1c1c1c;
  --link-color: #99cc99;
  --white-color: #fff;
  --black-color: #0a0a0a;
  --silver-color: #ddd;
  --blue-color: #0085ff;
}

/* 1.0 - Reset */

 {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
/* 2.0 - Globals */

body {
  background-color: var(--white-color);
  font-family: 'Open Sans', 'Raleway', 'Tahoma', sans-serif;
}

.wrapper {
  width: 280px;
  height: auto;
  min-height: 100vh;
  margin: auto;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  color: var(--main-bg-color);
}

.avatar {
  width: 15rem;
  height: 15rem;
  border-radius: 25%;
  object-fit: cover;
  margin-bottom: 1rem;
}

/* 3.0 - Headings */

.headings {
  margin: 1rem;
}

.title {
  font-size: 1.75rem;
  margin-bottom: 0.25rem;
}

.subtitle {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

/* 4.0 - Networks */

.networks {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.networks__item {
  margin: 0 0.5rem;
}

.networks__item-icon {
  width: 2rem;
  height: 2rem;
  object-fit: contain;
}

/* 5.0 - Skills */

.skills {
  margin: 1rem;
}

hgroup {
  margin-bottom: 1rem;
}

hgroup h2 {
5rem;
  margin-bottom: 0.75rem;
}

.skills div {
  font-size: 1rem;
  margin-bottom: 0.75rem;
}

/* 6.0 - Contact */

.contact-action {
  background-color: var(--main-bg-color);
  color: var(--white-color);
  padding: 0.75rem 1rem;
  border-radius: 10px;
  text-decoration: none;
  margin-bottom: 1rem;
}

.contact-action:hover {
  background-color: var(--link-color);
  transition: background-color 0.2s ease-in-out;
}

.contact-action__icon {
  margin-left: 0.5rem;
  font-size: 0.8rem;
}

</style>
  `,
].join('\n');

$(function () {
  // Ace code editor
  //--------------------------------------------------------------------------------
  const editor = ace.edit('editor');
  editor.setTheme('ace/theme/cobalt');
  editor.getSession().setMode('ace/mode/html');
  editor.setHighlightActiveLine(true);
  editor.getSession().setTabSize(1);
  editor.setOptions({
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: '14px',
    displayIndentGuides: false,
    showGutter: false,
    readOnly: false,
  });
  editor.commands.removeCommand('gotoline');
  editor.setShowPrintMargin(false);
  editor.commands.addCommand({
    name: 'showHelp',
    bindKey: { win: 'Ctrl-/', mac: 'Command-/' },
    exec: function () {
      $('#help').toggleClass('visible');
    },
  });
  editor.commands.addCommand({
    name: 'toggleFullscreen',
    bindKey: { win: 'Ctrl-i', mac: 'Command-i' },
    exec: function () {
      toggleFullscreen();
    },
  });

  // Set up iframe.
  const iframe = document.getElementById('preview'),
    iframedoc = iframe.contentDocument || iframe.contentWindow.document;
  iframedoc.body.setAttribute('tabindex', 0);

  // Base firebase ref
  //--------------------------------------------------------------------------------
  const scratchpadRef = new Firebase(
    'https://rys-portfolio.firebaseio.com/' + Scratchpad.document_id
  );

  // Code Editing
  //--------------------------------------------------------------------------------
  const scratchpadEditorRef = scratchpadRef.child('editor');

  // When code changes, put it into the editor
  scratchpadEditorRef.on('value', function () {
    editor.setValue(`${intro}`);
    // Clear selection and move cursor to where it needs to be
    editor.clearSelection();
  });

  // On keyup, save the code and cursor data to firebase
  let typingTimeout;
  $('#editor').on('keyup', function () {
    // Tell firebase who is editing
    window.clearTimeout(typingTimeout);
    thisClientRef.set('typing');

    // Set a timeout for 2 seconds that tells firebase who is typing
    typingTimeout = setTimeout(function () {
      thisClientRef.set('idle');
    }, 2000);
  });

  // On data change, re-render the code in the iframe.
  editor.getSession().on('change', function (e) {
    iframedoc.body.innerHTML = editor.getValue();
    // Resize the menu icon if appropriate
    const linesOfCode = editor.session.getLength();
    if (linesOfCode < 10) {
      $('#menu').attr('class', 'small');
    } else if (linesOfCode > 9 && linesOfCode < 99) {
      $('#menu').attr('class', 'medium');
    } else if (linesOfCode > 99 && linesOfCode < 999) {
      $('#menu').attr('class', 'large');
    } else if (linesOfCode > 999) {
      $('#menu').attr('class', 'x-large');
    }
  });

  // Show different tooltip for Windows users.
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') !== -1;
  if (!isMac) {
    $('.tooltip').html('Keyboard Shortcut: Control + i');
  }
});

// Show/Hide button code editor mobile
// --------------------------------------------------------------------------------

const showPreview = document.querySelector('.hide-show-toggle');
const hidePreview = document.querySelector('.hidden');

showPreview.onclick = function changeContent() {
  hidePreview.classList.toggle('visible');
};
