const output = document.getElementById("output");
const promptString = document.getElementById("prompt").textContent;
const input = document.getElementsByClassName("terminal-input")[0];

const train = [
	"      oooOOOOOOOOOOO                                                    ",
	"     o   ____          :::::::::::::::::: :::::::::::::::::: __|-----|__",
	"     Y_,_|[]| --++++++ |[][][][][][][][]| |[][][][][][][][]| |  [] []  |",
	"    {|_|_|__|;|______|;|________________|;|________________|;|_________|;",
	"     /oo--OO   oo  oo   oo oo      oo oo   oo oo      oo oo   oo     oo",
	"+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+"
]

function createNewOutputLine(html, parent) {
	const newTerminalLine = document.createElement("div");
	newTerminalLine.classList.add("terminal-line");
	newTerminalLine.innerHTML = html;
	parent.appendChild(newTerminalLine);
}

function createEmptyOutputLine(parent) {
	const br = document.createElement("br");
	parent.appendChild(br);
}

function createImage(imgSource, htmlArr) {
	const wrapper = document.createElement("div");
	wrapper.classList.add("img-wrapper");

	const img = document.createElement("img");
	img.src = imgSource;
	img.alt = imgSource;
	img.style.width = `${htmlArr.length * 2}em`;
	img.style.height = `${htmlArr.length * 2}em`;
	wrapper.appendChild(img);

	const wrapper2 = document.createElement("div");
	createNewOutputLine("", wrapper2);
	for (html of htmlArr) {
		createNewOutputLine(html, wrapper2);
	}

	wrapper.appendChild(wrapper2);
	output.appendChild(wrapper);
}

function runCommand(command) {
	createNewOutputLine(promptString + " " + command, output);
	if (command in commands) {
		commands[command]();
	} else {
		createNewOutputLine("Invalid command. Type \"help\" to see a list of available commands.", output);
		createEmptyOutputLine(output);
	}
}

const commands = {
	help: () => {
		createNewOutputLine(`Available commands: ${Object.keys(commands).join(", ")}`, output);
		createEmptyOutputLine(output);
	},
	profile: () => {
		const htmlArr = [
			"&nbsp;",
			"Name: Kumara Ivan Anuraga",
			"Hobi: Hiking",
			"Keahlian:",
			"    * Rust <i class='devicon-rust-original'></i>",
			"    * C++ <i class='devicon-cplusplus-plain'></i>",
			"    * Lua <i class='devicon-lua-plain'></i>"
		];
		createImage("./ivan.jpeg", htmlArr);
		createEmptyOutputLine(output);
	},
	lastActivity: () => {
		const htmlArr = [
			"&nbsp;",
			"Menjadi panitia Science Fest 2026",
			"Sebagai Koordinator Divisi Logistik",
			"&nbsp;",
			"&nbsp;",
		];

		createImage("./ivan-sf.png", htmlArr);
		createEmptyOutputLine(output);
	},
	train: () => {
		for (line of train) {
			createNewOutputLine(line, output);
		}
		createEmptyOutputLine(output);
	},
	clear: () => {
		output.replaceChildren();
	}
};

(function() {
	document.addEventListener("keydown", (event) => {
		if (event.ctrlKey || event.altKey || event.metaKey ||
			event.key === 'Shift' || event.key === 'Control' ||
			event.key === 'Alt' || event.key === 'Meta') {
			return;
		}

		if (event.key === "Backspace") {
			if (input.textContent.length >= 1) {
				input.textContent = input.textContent.slice(0, -1);
			}
		} else if (event.key === "Enter") {
			runCommand(input.textContent);
			input.textContent = "";
		} else if (event.key.length === 1) {
			input.textContent += event.key;
		}
	})
})()
