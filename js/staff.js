var currentQuestion = 1;
var age; 
var reason; 
var different; 
var active; 
var question; 

var params = new URLSearchParams(window.location.search);

if (!params.get("code")) {
    document.body.innerHTML = ''
    document.body.style.backgroundColor = 'white';

    const invalidCodeParagraph = document.createElement('p')
    invalidCodeParagraph.textContent = 'Invalid code'

    document.body.appendChild(invalidCodeParagraph)
} else {
    function switchVisible() {
        if (currentQuestion === 1) {
            if (document.getElementById("ageinput").value.trim() == "") 
                return 
    
            document.getElementById('Div1').style.display = 'none';
            document.getElementById('Div2').style.display = 'block';
            age = document.getElementById("ageinput").value
        
            currentQuestion = 2;  
        } else if (currentQuestion === 2) {
            if (document.getElementById("whywantstaff").value.trim() == "") 
                return 
    
            document.getElementById('Div2').style.display = 'none';
            document.getElementById('Div3').style.display = 'block';
            reason = document.getElementById("whywantstaff").value 
            currentQuestion = 3;
        } else if (currentQuestion === 3) {
            if (document.getElementById("howdifferent").value.trim() == "") 
                return 
    
            document.getElementById('Div3').style.display = 'none';
            document.getElementById('Div4').style.display = 'block';
            different = document.getElementById('howdifferent').value 
            currentQuestion = 4;
        } else if (currentQuestion === 4) {
            if (active == null) 
                return 
    
            document.getElementById('Div4').style.display = 'none';
            document.getElementById('Div5').style.display = 'block';
            currentQuestion = 5;
        } else if (currentQuestion === 5) {
            if (document.getElementById("HeadlineAct").value.trim() == "") 
                return 
    
            document.getElementById('Div5').style.display = 'none';
            document.getElementById('Done').style.display = 'block';
            question = document.getElementById("HeadlineAct").value
    
            try {
                const url = new URL("https://hideout.one/api/staff/submit");
                url.searchParams.append("Age", age);
                url.searchParams.append("Reason", reason);
                url.searchParams.append("Different", different);
                url.searchParams.append("Active", active);
                url.searchParams.append("Question", question);
                url.searchParams.append("Token", params.get("code"));
            
                fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(json => {
                        console.log(json);
                    })
                    .catch(error => {
                        console.error('There was a problem with your fetch operation:', error);
                    });
            } catch (error) {
                console.log("An Unexpected Error Has Occurred, Please Retry 2.");
            }
            
        }
    }
    
    document.getElementById("option1").addEventListener("click", function() {
      active = "< 1 Hour"
    })
    
    document.getElementById("option2").addEventListener("click", function() {
      active = "< 1 Hour"
    })
    
    document.getElementById("option3").addEventListener("click", function() {
      active = "< 1 Hour"
    })
}
