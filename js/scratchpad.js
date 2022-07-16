// Scratchpad Intro
//--------------------------------------------------------------------------------
const intro = [
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
        <strong>Skills ${new Date().getFullYear()}⚡</strong>
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
  background-color: const(--silver-color);
  background-color: #f2f2f2;
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
  height: 320px;
  object-fit: cover;
  object-position: bottom;
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
  `].join("\n");
  
$(function () {

  // Ace code editor
  //--------------------------------------------------------------------------------
  const editor = ace.edit("editor");
  editor.setTheme("ace/theme/cobalt");
  editor.getSession().setMode("ace/mode/html");
  editor.setHighlightActiveLine(false);
  editor.getSession().setTabSize(2);
  editor.setOptions({
    fontFamily: "Fira Code",
    fontSize: "12px",
    displayIndentGuides: false,
    showGutter: false,
    readOnly: false,
  });
  editor.commands.removeCommand("gotoline");
  editor.setShowPrintMargin(false);
  editor.commands.addCommand({
    name: "showHelp",
    bindKey: { win: "Ctrl-/", mac: "Command-/" },
    exec: function () {
      $("#help").toggleClass("visible");
    },
  });
  editor.commands.addCommand({
    name: "toggleFullscreen",
    bindKey: { win: "Ctrl-i", mac: "Command-i" },
    exec: function () {
      toggleFullscreen();
    },
  });

  // Set up iframe.
  const iframe = document.getElementById("preview"),
    iframedoc = iframe.contentDocument || iframe.contentWindow.document;
  iframedoc.body.setAttribute("tabindex", 0);

  // Base firebase ref
  //--------------------------------------------------------------------------------
  const scratchpadRef = new Firebase(
    "https://rys-portfolio.firebaseio.com/" + Scratchpad.document_id
  );
  const now = new Date();
  scratchpadRef.child("updatedAt").set(now.toString());

  // Multiple client stuff
  //--------------------------------------------------------------------------------

  // Push a new child to clients that kills itself on disconnect
  const thisClientRef = scratchpadRef.child("clients").push("idle");
  thisClientRef.onDisconnect().remove();

  // Keep track of the number of active connections
  scratchpadRef.child("clients").on("value", function (dataSnapshot) {
    if (dataSnapshot.val() === null) {
      scratchpadRef.child("clients").set({});
    } else {
      const numClients = dataSnapshot.numChildren();

      // Label the tooltip appropriately
      $("#connections-tooltip").remove();
      if (numClients === 2) {
        $("#connections").after(
          '<span id="connections-tooltip"> 1 other viewer</span>'
        );
      } else if (numClients === 1) {
        // do nothing
      } else {
        $("#connections").after(
          '<span id="connections-tooltip"> ' +
            (numClients - 1) +
            " other viewers</span>"
        );
      }

      // Append proper number of dots
      $("#connections").html("");
      for (i = 1; i < dataSnapshot.numChildren(); i++) {
        $("#connections").append("<li>&nbsp;</li>");
      }
    }
  });

  $("#connections").hover(
    function () {
      $("#connections-tooltip").css("opacity", 1);
    },
    function () {
      $("#connections-tooltip").css("opacity", 0);
    }
  );

  // Code Editing
  //--------------------------------------------------------------------------------
  const scratchpadEditorRef = scratchpadRef.child("editor");

  // When code changes, put it into the editor
  scratchpadEditorRef.on("value", function (dataSnapshot) {
    editor.setValue(`${intro}`);
    // Clear selection and move cursor to where it needs to be
    editor.clearSelection();
    editor.moveCursorToPosition(dataSnapshot.child("cursor").val());
  });

  // On keyup, save the code and cursor data to firebase
  let typingTimeout;
  $("#editor").on("keyup", function () {
    // Tell firebase who is editing
    window.clearTimeout(typingTimeout);
    thisClientRef.set("typing");

    // Set a timeout for 2 seconds that tells firebase who is typing
    typingTimeout = setTimeout(function () {
      thisClientRef.set("idle");
    }, 2000);
  });

  // On data change, re-render the code in the iframe.
  editor.getSession().on("change", function (e) {
    iframedoc.body.innerHTML = editor.getValue();
    // Resize the menu icon if appropriate
    const linesOfCode = editor.session.getLength();
    if (linesOfCode < 10) {
      $("#menu").attr("class", "small");
    } else if (linesOfCode > 9 && linesOfCode < 99) {
      $("#menu").attr("class", "medium");
    } else if (linesOfCode > 99 && linesOfCode < 999) {
      $("#menu").attr("class", "large");
    } else if (linesOfCode > 999) {
      $("#menu").attr("class", "x-large");
    }
  });

  // History (Recent Scratchpads)
  // --------------------------------------------------------------------------------
  if (typeof Storage !== "undefined") {
    // Initialize recentScratchpads row in localStorage if needed
    if (localStorage["recentScratchpads"] === undefined) {
      localStorage["recentScratchpads"] = JSON.stringify([]);
    }

    function addToRecentScratchpads(id) {
      let recentScratchpadsArr = [];
      recentScratchpadsArr =
        JSON.parse(localStorage["recentScratchpads"]) || [];
      if (!_.contains(recentScratchpadsArr, id)) {
        recentScratchpadsArr.push(id);
        localStorage["recentScratchpads"] =
          JSON.stringify(recentScratchpadsArr);
      } else {
        recentScratchpadsArr = _.without(recentScratchpadsArr, id);
        recentScratchpadsArr.push(id);
        localStorage["recentScratchpads"] =
          JSON.stringify(recentScratchpadsArr);
      }
    }

    function deleteRecentScratchpadFromList(id) {
      // Delete from localstore
      let recentScratchpadsArr;
      recentScratchpadsArr = JSON.parse(localStorage["recentScratchpads"]);
      recentScratchpadsArr = _.without(recentScratchpadsArr, id);
      localStorage["recentScratchpads"] = JSON.stringify(recentScratchpadsArr);

      // Delete from DOM
      $("#recent-scratchpads li").each(function () {
        if ($(this).children(".delete").data("id") == id) {
          $(this).remove();
        }
      });
    }

    $("#recent-scratchpads").on("click", ".delete", function () {
      deleteRecentScratchpadFromList($(this).data("id"));
    });

    addToRecentScratchpads(Scratchpad.document_id);
  } else {
    // Sorry! No web storage support.
    $("#recent-scratchpads").html(
      "Sorry! Your browser doesn't support HTML5 local storage."
    );
  }

  // Menu stuff
  // --------------------------------------------------------------------------------

  // Toggle fullscreen mode on menu click
  $("#menu").click(function () {
    $("#scratchpad").toggleClass("menu");
    mixpanel.track("Menu toggle");
    if (!Scratchpad.loadedRecentScratchpads) {
      renderRecentScratchpads(getRecentScratchpads());
    }
  });

  // Show different tooltip for Windows users.
  const isMac = navigator.platform.toUpperCase().indexOf("MAC") !== -1;
  if (!isMac) {
    $(".tooltip").html("Keyboard Shortcut: Control + i");
  }
});

// Show/Hide button code editor mobile
// --------------------------------------------------------------------------------

const showPreview = document.querySelector(".hide-show-toggle");
const hidePreview = document.querySelector(".hidden");

showPreview.onclick = function changeContent() {
  hidePreview.classList.toggle("visible");
};
