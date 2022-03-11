$(function() {
  // Scratchpad Intro
  //--------------------------------------------------------------------------------
  var intro = [
    `
    <!-- ::Front-End Developer ::
    {
      "name": 'Ricardo Guillen I.',
      "jobTitle": 'Front-End Developer',
      "motto": 'Coffee, Code, Sleep, Repeat',
      "skills": [
        "Web_Development": {
          "Javascript": [
            "ES6",
            "VueJs", 
            "NuxtJs", 
            "ReactJs",
            "NextJs",
            "NodeJs"
          ],
          "Database": [
            "MongoDB",
            "MySQL",
            "Postgresql"
          ]
        },
        "Web_Design": [
          "TailwindCSS",
          "Javascript",
          "HTML5",
          "CSS3",
          "Figma",
          "Adobe XD"
        ]
      ]
    } 
      ::Keep Scrolling Down::
  -->

<div class="wrapper">

  <!-- Photo -->
  <img class="avatar" src="./assets/imgs/JPG/logo.jpg" title="Ricardo GI, Front-End Developer" />

  <div class="content">

    <section class="headings">

      <!-- Full Name -->
      <h1 class="title">Ricardo Guillen I.</h1>

      <!-- Job Title -->
      <h2 class="subtitle">Lead Front-End Developer at Elaniin</h2>

      <!-- Social Networks -->
      <div class="networks">
        <a class="networks__item" href="https://github.com/ryarturogi" title="Github" target="_blank">
          <img class="networks__item-icon" src="./assets/imgs/SVG/github.svg" title="Github" />
        </a>
        <a class="networks__item" href="https://facebook.com/ryarturogi" title="Facebook" target="_blank">
          <img class="networks__item-icon" src="./assets/imgs/SVG/facebook.svg" title="Facebook" />
        </a>
        <a class="networks__item" href="https://twitter.com/ryarturogi" title="Twitter" target="_blank">
          <img class="networks__item-icon" src="./assets/imgs/SVG/twitter.svg" title="Twitter" />
        </a>
        <a class="networks__item" href="https://linkedin.com/in/ryarturogi" title="LinkedIn" target="_blank">
          <img class="networks__item-icon" src="./assets/imgs/SVG/linkedin-in.svg" title="LinkedIn" />
        </a>
      </div>

    </section>

    <!-- Skills -->
    <section class="skills">
      <hgroup>
        <h2>
          <strong>Skills 2020⚡</strong>
        </h2>

        <h3>
          <b>Web Development</b>
        </h3>
        <p>
          JavaScript: ES6, VueJs, NuxJs, ReactJs, NextJS, NodeJs, DB: MongoDB, MySQL, Postgresql
        </p> <br />

        <h3>
          <b>Website Design</b>
        </h3>
        <p>
          TailwindCSS, JavaScript, HTML5, CSS, Figma, Adobe XD
        </p>
      </hgroup>
    </section>
  </div>
  <!-- Contact Button -->
  <a class="contact-action" href="mailto:r.arturogi@gmail.com" title="Contact me!" target="_blank">Contact Me <span
      class="contact-action__icon">&phone;</span></a>

</div>

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

  /*
    0.0 - Root
    */

  :root {
    --main-bg-color: #1c1c1c;
    --link-color: #99cc99;

    /* colors */
    --white-color: #fff;
    --black-color: #0a0a0a;
    --silver-color: #ddd;
    --blue-color: #0085ff;

  }

  /*  
    1.0 - Reset
    */

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /*  
    2.0 - Globals
    */

  body {
    display: flex;
    background-color: var(--silver-color);
    background-color: #f2f2f2;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23ffffff' fill-opacity='0.4' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
  }

  .wrapper {
    color: var(--main-bg-color);
    margin: auto;
    width: 280px;
    height: auto;
    font-family: Open Sans, Raleway, Tahoma, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    justify-items: center;
    border-radius: 8px;
    overflow: hidden;
    background: var(--white-color);

  }

  /*  
    Avatar 
    */


  .avatar {
    width: 100%;
    max-width: 100%;
    margin: 0;
    display: block;
  }

  /*  
    Content
    */

  .content {
    background: var(--white-color);
    margin-top: -2.25em;
    padding: 0 2em 1em;
  }

  /*  
    Headings
    */


  .headings {
    display: block;
    margin: 1em 0 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    color: var(--black-color);
    font-size: 1.25rem;
    font-weight: 800;
    margin: 0;
  }

  .subtitle {
    color: var(--black-color);
    font-size: .875rem;
    width: 340px;
    font-weight: normal;
    margin: 0 0 0.5em;
    padding: 0 3em;
  }

  /*  
    Networks 
    */

  .networks {
    display: flex;
  }

  .networks__item {
    margin: 0 0.35rem;
  }

  .networks__item-icon {
    width: 18px;
  }

  /*  
    Skills 
    */

  .skills {
    max-width: 100%;
    display: block;
    clear: both;
    margin: 0;
    padding: 0 5em;
    font-size: .75rem;
    color: var(--color-white);
  }

  .skills h2 {
    margin-bottom: .5em;
  }


  /*  
    Contact
    */


  .contact-action {
    color: var(--blue-color);
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    display: block;
    width: 100%;
    max-width: 100%;
    margin: 1em 0 0;
    padding: .5em .75em .75em;
    background: var(--white-color);
    border: 2px solid var(--blue-color);
    border-radius: 0 0 8px 8px;
    transition: ease 0.2s all;
    -webkit-transition: ease 0.2s all;
    -moz-transition: ease 0.2s all;
  }

  .contact-action:hover {
    background: var(--blue-color);
    border-top: 2px solid var(--blue-color);
    color: var(--white-color);
  }

  .contact-action__icon {
    position: relative;
    top: 2px;
    left: 2px;
    font-size: 1.35rem;
  }
</style>
    `
  ].join('\n');

  // Ace code editor
  //--------------------------------------------------------------------------------
  var editor = ace.edit('editor');
  editor.setTheme('ace/theme/cobalt');
  editor.getSession().setMode('ace/mode/html');
  editor.setHighlightActiveLine(false);
  editor.getSession().setTabSize(2);
  editor.setOptions({
    fontFamily: 'Fira Code',
    fontSize: '12px',
    displayIndentGuides: false,
    showGutter: false,
    readOnly: false
  });
  editor.commands.removeCommand('gotoline');
  editor.setShowPrintMargin(false);
  editor.commands.addCommand({
    name: 'showHelp',
    bindKey: { win: 'Ctrl-/', mac: 'Command-/' },
    exec: function(editor) {
      $('#help').toggleClass('visible');
    }
  });
  editor.commands.addCommand({
    name: 'toggleFullscreen',
    bindKey: { win: 'Ctrl-i', mac: 'Command-i' },
    exec: function(editor) {
      toggleFullscreen();
    }
  });

  // Set up iframe.
  var iframe = document.getElementById('preview'),
    iframedoc = iframe.contentDocument || iframe.contentWindow.document;
  iframedoc.body.setAttribute('tabindex', 0);

  // Base firebase ref
  //--------------------------------------------------------------------------------
  var scratchpadRef = new Firebase(
    'https://rys-portfolio.firebaseio.com/' + Scratchpad.document_id
  );
  var now = new Date();
  scratchpadRef.child('updatedAt').set(now.toString());

  // Multiple client stuff
  //--------------------------------------------------------------------------------

  // Push a new child to clients that kills itself on disconnect
  var thisClientRef = scratchpadRef.child('clients').push('idle');
  thisClientRef.onDisconnect().remove();

  // Keep track of the number of active connections
  scratchpadRef.child('clients').on('value', function(dataSnapshot) {
    if (dataSnapshot.val() === null) {
      scratchpadRef.child('clients').set({});
    } else {
      var numClients = dataSnapshot.numChildren();

      // Label the tooltip appropriately
      $('#connections-tooltip').remove();
      if (numClients === 2) {
        $('#connections').after(
          '<span id="connections-tooltip"> 1 other viewer</span>'
        );
      } else if (numClients === 1) {
        // do nothing
      } else {
        $('#connections').after(
          '<span id="connections-tooltip"> ' +
            (numClients - 1) +
            ' other viewers</span>'
        );
      }

      // Append proper number of dots
      $('#connections').html('');
      for (i = 1; i < dataSnapshot.numChildren(); i++) {
        $('#connections').append('<li>&nbsp;</li>');
      }
    }
  });

  $('#connections').hover(
    function() {
      $('#connections-tooltip').css('opacity', 1);
    },
    function() {
      $('#connections-tooltip').css('opacity', 0);
    }
  );

  // Code Editing
  //--------------------------------------------------------------------------------
  var scratchpadEditorRef = scratchpadRef.child('editor');

  // When code changes, put it into the editor
  scratchpadEditorRef.on('value', function(dataSnapshot) {
    var thisClientStatus;
    thisClientRef.once('value', function(dataSnapshot) {
      thisClientStatus = dataSnapshot.val();
    });

    // If this is a new scratchpad, put in our intro
    var clearReadOnlyMode;
    if (dataSnapshot.child('code').val() == null) {
      editor.setValue(intro);
    } else if (thisClientStatus == 'typing') {
      // do nothing, we're the ones typing in the first place
    } else {
      window.clearTimeout(clearReadOnlyMode);
      // editor.setReadOnly(true);
      editor.setValue(dataSnapshot.child('code').val());
      // clearReadOnlyMode = setTimeout(function() {
        // editor.setReadOnly(true);
      // }, 2000);
    }

    // Clear selection and move cursor to where it needs to be
    editor.clearSelection();
    editor.moveCursorToPosition(dataSnapshot.child('cursor').val());
  });

  // On keyup, save the code and cursor data to firebase
  var typingTimeout;
  $('#editor').on('keyup', function() {
    // Tell firebase who is editing
    window.clearTimeout(typingTimeout);
    thisClientRef.set('typing');

    // Get cursor position
    var startrow = editor.selection.getRange().start.row;
    var startcolumn = editor.selection.getRange().start.column;
    var endrow = editor.selection.getRange().end.row;
    var endcolumn = editor.selection.getRange().end.column;

    // If nothing is highlighted, ship contents of editor and cursor data to Firebase
    // if (startrow == endrow && startcolumn == endcolumn) {
    //   scratchpadEditorRef.set({
    //     code: editor.getValue(),
    //     cursor: editor.selection.getCursor()
    //   });
    // }

    // Set a timeout for 2 seconds that tells firebase who is typing
    typingTimeout = setTimeout(function() {
      thisClientRef.set('idle');
    }, 2000);
  });

  // On data change, re-render the code in the iframe.
  editor.getSession().on('change', function(e) {
    iframedoc.body.innerHTML = editor.getValue();
    // Resize the menu icon if appropriate
    var linesOfCode = editor.session.getLength();
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

  // Filename Stuff
  //--------------------------------------------------------------------------------
  // var scratchpadTitleRef = scratchpadRef.child('title');

  // // Show title on top, keep updated from server
  // scratchpadTitleRef.on('value', function(titleSnapshot) {
  //   if (titleSnapshot.val() == null) {
  //     scratchpadTitleRef.set(`Ry's Front-End Developer`);
  //   } else {
  //     $('#title').text(titleSnapshot.val());
  //   }
  //   document.title = titleSnapshot.val();
  // });

  // // Let users update title when they click it
  // $('#title').click(function() {
  //   var newTitle = prompt(
  //     'What do you want to name your file?',
  //     $(this).text()
  //   );
  //   if (newTitle != null) {
  //     scratchpadTitleRef.set(newTitle);
  //   }
  // });

  // // Stupid (webkit only?) hover bug fix
  // $('#title').hover(
  //   function() {
  //     $(this).addClass('hover');
  //   },
  //   function() {
  //     $(this).removeClass('hover');
  //   }
  // );

  // Fullscreen mode stuff
  //--------------------------------------------------------------------------------

  // Toggle fullscreen mode.
  // function toggleFullscreen() {
  //   if ($('#scratchpad').hasClass('menu')) {
  //     $('#scratchpad').removeClass('menu');
  //   }
  //   $('#scratchpad').toggleClass('fullscreen');
  //   location.hash = $('#scratchpad').attr('class');
  // }

  // // When the button is clicked, call toggleFullscreen.
  // $('#toggle-fullscreen').click(function() {
  //   toggleFullscreen();
  // });

  // // Even when iframe has focus, still toggleFullscreen
  // $('#preview')
  //   .contents()
  //   .find('body')
  //   .on('keydown', function(e) {
  //     if (e.keyCode == 73) {
  //       toggleFullscreen();
  //     }
  //   });

  // // For good measure, always toggleFullscreen
  // // key('⌘+i, ctrl+i', function() {
  // //   toggleFullscreen();
  // // });

  // // Automatically go into fullscreen mode when pageload includes #fullscreen
  // if (location.hash == '#fullscreen') {
  //   $('#scratchpad').toggleClass('fullscreen');
  // }

  // History (Recent Scratchpads)
  // --------------------------------------------------------------------------------
  if (typeof Storage !== 'undefined') {
    // Initialize recentScratchpads row in localStorage if needed
    if (localStorage['recentScratchpads'] === undefined) {
      localStorage['recentScratchpads'] = JSON.stringify([]);
    }

    function getRecentScratchpads() {
      var scratchpadIds = JSON.parse(localStorage['recentScratchpads']);
      return scratchpadIds;
    }

    function addToRecentScratchpads(id) {
      var recentScratchpadsArr = [];
      recentScratchpadsArr =
        JSON.parse(localStorage['recentScratchpads']) || [];
      if (!_.contains(recentScratchpadsArr, id)) {
        recentScratchpadsArr.push(id);
        localStorage['recentScratchpads'] = JSON.stringify(
          recentScratchpadsArr
        );
      } else {
        recentScratchpadsArr = _.without(recentScratchpadsArr, id);
        recentScratchpadsArr.push(id);
        localStorage['recentScratchpads'] = JSON.stringify(
          recentScratchpadsArr
        );
      }
    }

    function renderRecentScratchpads(listOfRecentScratchpads) {
      if (listOfRecentScratchpads.length > 1) {
        // Clear the loading text, save state that it's been loaded
        $('#recent-scratchpads').html('');
        var recentScratchpadTemplate =
          '<li><a class="recent-scratchpad" href="/<%= scratchpadId %>" target="_blank"><%= thisScratchpadTitle %> <time><%= dateTemplate %></time></a><a class="delete" data-id="<%= scratchpadId %>" href="javascript:void(0)">&times;</a></li>';

        _.each(listOfRecentScratchpads, function(scratchpadId) {
          if (Scratchpad.document_id != scratchpadId) {
            var thisScratchpadRef = new Firebase(
              'https://rys-portfolio.firebaseio.com/' + scratchpadId
            );
            thisScratchpadRef.once('value', function(dataSnapshot) {
              var thisScratchpadTitle = dataSnapshot.child('title').val();
              dateObj = new Date(dataSnapshot.child('updatedAt').val());
              dateTemplate =
                dateObj.getDate() +
                '/' +
                dateObj.getMonth() +
                '/' +
                dateObj.getFullYear();
              thisScratchpadTemplate = _.template(recentScratchpadTemplate, {
                scratchpadId: scratchpadId,
                thisScratchpadTitle: thisScratchpadTitle,
                dateTemplate: dateTemplate
              });
              $('#recent-scratchpads').prepend(thisScratchpadTemplate);
            });
          }
        });
      } else {
        $('#recent-scratchpads').html('<li>No recent scratchpads!</li>');
      }
      Scratchpad.loadedRecentScratchpads = true;
    }

    function deleteRecentScratchpadFromList(id) {
      // Delete from localstore
      var recentScratchpadsArr;
      recentScratchpadsArr = JSON.parse(localStorage['recentScratchpads']);
      recentScratchpadsArr = _.without(recentScratchpadsArr, id);
      localStorage['recentScratchpads'] = JSON.stringify(recentScratchpadsArr);

      // Delete from DOM
      $('#recent-scratchpads li').each(function(index) {
        if (
          $(this)
            .children('.delete')
            .data('id') == id
        ) {
          $(this).remove();
        }
      });
    }

    $('#recent-scratchpads').on('click', '.delete', function(e) {
      deleteRecentScratchpadFromList($(this).data('id'));
    });

    addToRecentScratchpads(Scratchpad.document_id);
  } else {
    // Sorry! No web storage support.
    $('#recent-scratchpads').html(
      "Sorry! Your browser doesn't support HTML5 local storage."
    );
  }

  // Menu stuff
  // --------------------------------------------------------------------------------

  // Toggle fullscreen mode on menu click
  $('#menu').click(function() {
    $('#scratchpad').toggleClass('menu');
    mixpanel.track('Menu toggle');
    if (Scratchpad.loadedRecentScratchpads != true) {
      renderRecentScratchpads(getRecentScratchpads());
    }
  });

  // Show different tooltip for Windows users.
  var isMac = navigator.platform.toUpperCase().indexOf('MAC') !== -1;
  if (isMac != true) {
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
