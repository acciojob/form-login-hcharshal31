function getFormvalue() {
    const firstName = getElementById("first").value;
	const lastName = getElementById("last").value;
	alert(`${firstName} ${lastName}`);
}

document.getElementById("btn").onclick = getFormvalue;
