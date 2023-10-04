document.getElementById("submit").style.display='none';
document.getElementById("retake").style.display='none';
const btn=document.getElementById("next");
var r=document.getElementById("ss");
// var opt=document.getElementById("opt");
const prev=document.getElementById("prev");
const ques=["<b>Find the principle on a certain sum of money at 5% per annum for 2 2/5 years if the amount being Rs.1120?</b><br>",
	"<b>What sum of money will produce Rs.70 as simple interest in 4 years at 3 1/2 percent?</b><br>",
	"<b>A and B complete a work in 6 days. A alone can do it in 10 days. If both together can do the work in how many days?</b><br>",
	"<b>A car covers a distance of 624 km in 6 ½ hours. Find its speed?</b><br>",
	"<b>A cycle is bought for Rs.900 and sold for Rs.1080, find the gain percent?</b><br>"];
const ans=[["Rs.1000","Rs.1100","Rs.1050","Rs.1200"],
	["Rs.525","Rs.500","Rs.550","Rs.555"],
	["3.75 days","4 days","5 days","6 days"],
	["104 kmph","140 kmph","104 mph","10.4 kmph"],
	["16 2/3%","20%","18%","25%"]]

const arr=[0,0,0,0,0];
const answer=[1,2,1,1,2];

let i=0;
let j=0;
function getOptions(k,u)
{
	if(arr[k]==0)
	{
		return "<input type='radio' name='opt' id='op' onclick='prinet("+ k +","+ u +")'>" + ans[k][u] + "<br>";
	}
	else{
		if(arr[k]==u+1)
		{
			return "<input type='radio' name='opt' id='op' onclick='prinet("+ k +","+ u +")' checked>" + ans[k][u] + "<br>";		
		}
		else{
			return "<input type='radio' name='opt' id='op' onclick='prinet("+ k +","+ u +")'>" + ans[k][u] + "<br>";
		}	
	}
}


window.addEventListener('load', (event) =>{
	r.innerHTML=ques[i];
		k=0;
		for(u=0;u<ans[k].length;u++)
		{
			r.innerHTML+="<b>"+getOptions(k,u)+"</b>";

		}
});

const clearres = (name) =>{
	const bt=document.querySelectorAll("input[type='radio'][name='" + name + "']");
	bt.forEach((bts)=>{
		if(bts.checked === true)
		{
			bts.checked=false;
			cle(k);
		}
	});
};


btn.addEventListener("click", function(event) {
	
	event.preventDefault();
	if(i==ques.length-1)
	{
		i=4;
		r.innerHTML=ques[i];
		for(k=i;k<i+1;k++)
		{
			for(u=0;u<ans[k].length;u++)
			{
				r.innerHTML+=getOptions(k,u);
			}
		}
	}
	else{
		i++;
		r.innerHTML=ques[i];
		for(k=i;k<i+1;k++)
		{
			for(u=0;u<ans[k].length;u++)
			{
				r.innerHTML+=getOptions(k,u);
			}
		}
	}
	if(i==ques.length-1)
	{
		const sub=document.getElementById("next").style.display='none';
		document.getElementById("submit").style.display='inline';
	}
});


prev.addEventListener("click", function(event) {
	
	event.preventDefault();
	if(i==0)
	{
		i=0;
		r.innerHTML=ques[i];
		for(k=i;k<i+1;k++)
		{
			for(u=0;u<ans[k].length;u++)
			{
				r.innerHTML+=getOptions(k,u);
			}
		}
	}
	else{
		i--;
		r.innerHTML=ques[i];
		for(k=i;k<i+1;k++)
		{
			for(u=0;u<ans[k].length;u++)
			{
				r.innerHTML+=getOptions(k,u);
			}
		}
	}
	if(i<ques.length-1)
	{
		document.getElementById("submit").style.display='none';
		document.getElementById("next").style.display='inline';
	}
});

function prinet(k,u) {
	arr[k]=u+1;
}

function vali() {
	let count=0;
	for(t=0;t<arr.length;t++)
	{
		if(arr[t]==answer[t])
		{
			count++;
		}
	}
	// window.location.assign("final.html");
	var qp=document.getElementById("ee");
	document.getElementById("submit").style.display='none';
	document.getElementById("next").style.display='none';
	document.getElementById("prev").style.display='none';
	document.getElementById("ss").style.display='none';
	document.getElementById("clear").style.display='none';
	document.getElementById("retake").style.display='block';
	if(count==5)
	{
		qp.innerHTML="You have answered all correctly";
	}
	else{
		qp.innerHTML="You have answered "+ count +" correctly";
	}
	
	
}

function cle(k)
{
	arr[k-1]=0;
}
function ret() {
	window.location.assign("home.html");
}