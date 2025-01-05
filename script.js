function getFormvalue() {
    const firstName = document.getElementById("first").value;
	const lastName = document.getElementById("last").value;
	alert(`${firstName} ${lastName}`);
}

document.getElementById("btn").onclick = getFormvalue;
