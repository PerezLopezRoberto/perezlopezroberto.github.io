var asign = [];
var asi = [];
var asi1 = [];
var contar = 1;
var array = [];
var res=0;
var x = 1;
var videos = [];
var nextPageToken = '';
var resultados= 6;
var map;
var slideIndex = 1;
var inic;
var final;
var ver;
var reunir=""

function initMap() {
        var uluru = {lat: 21.1825522, lng: -99.7062614};
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: uluru
        });
      /*  var uluru = {lat: -25.363, lng: 131.044};
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
        var uluru = {lat: 17.0715, lng: -96.7368};
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });*/
}

function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyDBfqSNjORAlOBlhqf6CfAlES5We-2bK0M');
}

function bookSeach(){
    //request.execute(onSearchResponse);

 var query;

  var search = document.getElementById('search').value
  resultados = document.getElementById('contar').value
  document.getElementById('res').innerHTML =  '<div id="results" class="w3-content w3-display-container"></div>'

  j=0;

  $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
    dataType:"json",

    success: function(data){
      var img = '';
      var url = '';

      for(i=0;i< data.items.length;i++){
        query = data.items[i].volumeInfo.title + " libro " + data.items[i].volumeInfo.authors

          document.getElementById('results').innerHTML += '<div class="mySlides" id="tec'+ (i+1) + '"></div>';

        aux = 'tec'+ (i+1);

         j=i;

        document.getElementById(aux).innerHTML += '<h5 class = "white-text" id="texto">' + data.items[i].volumeInfo.title + '</h5>'
        document.getElementById(aux).innerHTML += '<h6 class = "white-text" id="texto">Por: ' + data.items[i].volumeInfo.authors + '</h6>'
        document.getElementById(aux).innerHTML += '<img id="imagen" src="'+ data.items[i].volumeInfo.imageLinks.thumbnail +'">'

        //results.innerHTML += '<div class="encap" id='+ (i+1) +'><div>'

        //document.getElementById("scripty").src = "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"

        $(document).ready(function(){
           $('.collapsible').collapsible();
        });

        $(document).ready(function(){
          $('.carousel').carousel();
       });

       $(document).ready(function(){
         // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
         $('.modal').modal();
       });

        //results.innerHTML += '<div class="encap" id='+ (i+1) +'><div>'

      //  results.innerHTML += '<ul class = "encap collapsible" data-collapsible = "accordion" materialize="collapsible"><li> <div class = "collapsible-header"><i class = "material-icons">book</i>Sinopsis</div><div class = "collapsible-body" id="pintar"><p id="texto1">'+ data.items[i].volumeInfo.description +'</p></div></li><li><div class = "collapsible-header"><i class = "material-icons">play_circle_outline</i>Video Critica</div> <div class = "collapsible-body" id="pintar"><div id = "ito'+ (i+1) +'" class = "carousel" ></div></div></li></ul>'

      document.getElementById(aux).innerHTML += '<ul class="encap collapsible" data-collapsible = "accordion" style="margin-right: 52px"><li><div class="collapsible-header"><i class = "material-icons">book</i>Sinopsis</div><div class="collapsible-body" id="pintar"><p id="texto1">'+ data.items[i].volumeInfo.description +'</p></div></li><li><div class="collapsible-header"><i class = "material-icons">play_circle_outline</i>Video Critica</div><div id = "ito'+ (i+1) +'" class="collapsible-body pintar"></div></li></ul>'



      res = res + 1;


  /*      var request = gapi.client.youtube.search.list({
            part: 'snippet',
            type: "video",
            maxResults: 6,
            order: "relevance",
            q:query
        });


        request.execute(onSearchResponse);*/





        //alert("pr")

        //results.innerHTML += '<p id="texto1">'+ data.items[i].volumeInfo.description +'</p>'
        //contar = contar + i;
        search_a(query)
      }
      document.getElementById('results').innerHTML += ' <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button><button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>'
      showDivs(slideIndex);
    },
    type: 'GET'
  });

  document.getElementById('res').className = 'res'
  document.getElementById('results').className = 'w3-content w3-display-container contenido2'
  search_b(search);

}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}


//document.getElementById('button').addEventListener('click',bookSeach,false)

/*function search() {
    var query = document.getElementById('query').value;

    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        type: "video",
        maxResults: 2,
        order: "relevance",
        q:query
    });

    request.execute(onSearchResponse);
}*/

function search_a(palabra){
  limpiarArray();

if(resultados<=10){
	var query = 'https://www.googleapis.com/youtube/v3/search?q='+palabra+
	'&key=AIzaSyDBfqSNjORAlOBlhqf6CfAlES5We-2bK0M'+
	'&part=snippet&maxResults='+ resultados;
	xmlhttp=new XMLHttpRequest();

	xmlhttp.open("GET", query, false);
	xmlhttp.send();
	var data = JSON.parse(xmlhttp.responseText);

  $(document).ready(function(){
    $('.carousel').carousel();
  });

  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

  var aux='';
  var aux1='';
  var j = 0;

  for (var i in data.items) {
    $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });

          //alert('cs');

    var item = data.items[i];

    var ulr = "https://www.youtube.com/embed/" + item.id.videoId + "?rel=0"

    aux += '<a class="carousel-item" href="#'+ 'modal' + x + '' + i + '"><center style="width: 300px;">'+item.snippet.title+'</center><iframe src="'+ulr+'"></iframe></a>'

  }

  asi.push(aux);

  x = x + 1;

  for(i=0; i< res ;i++){

    $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });
          //alert(aux);

    //alert('no')


    var g = 'ito' + (j+1)
    document.getElementById(g).innerHTML= '<div  class="carousel">' + asi[i] + '</div>' /*+ asi1[i]*/;

    j = j + 1;
  }
}
if(resultados>10){
	var query = 'https://www.googleapis.com/youtube/v3/search?q='+palabra+
	'&key=AIzaSyDBfqSNjORAlOBlhqf6CfAlES5We-2bK0M'+
	'&part=snippet&maxResults='+ resultados;
	xmlhttp=new XMLHttpRequest();

	xmlhttp.open("GET", query, false);
	xmlhttp.send();
	var data = JSON.parse(xmlhttp.responseText);

  $(document).ready(function(){
    $('.carousel').carousel();
  });

  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

  var aux='';
  var aux1='';
  var j = 0;

  for (var i in data.items) {
    $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });

          //alert('cs');

    var item = data.items[i];

    var ulr = "https://www.youtube.com/embed/" + item.id.videoId + "?rel=0"

    aux += '<a class="carousel-item" href="#'+ 'modal' + x + '' + i + '"><center style="width: 300px;">'+item.snippet.title+'</center><iframe src="'+ulr+'"></iframe></a>'

  }

  asi.push(aux);

  x = x + 1;

  for(i=0; i< res ;i++){

    $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });
          //alert(aux);

    //alert('no')


    var g = 'ito' + (j+1)
    document.getElementById(g).innerHTML= '<div  class="carousel">' + asi[i] + '</div>' /*+ asi1[i]*/;

    j = j + 1;
  }
}
}


/*function search_b(palabra){
	limpiarArray();
	//var palabra = document.getElementById("query").value;
	//resultados = document.getElementById("").value;
	var query = 'https://www.googleapis.com/youtube/v3/search?q='+palabra+
	'&key=AIzaSyDBfqSNjORAlOBlhqf6CfAlES5We-2bK0M'+
	'&part=snippet&maxResults='+ 6;
	xmlhttp=new XMLHttpRequest();

	xmlhttp.open("GET", query, false);
	xmlhttp.send();
	var data = JSON.parse(xmlhttp.responseText);
	//console.log(data);
	nextPageToken = data.nextPageToken;
	//console.log(nextPageToken);
	for (var i = 0; i < data.items.length; i ++) {
		datosVideo(data.items[i].id.videoId);
	}

  while (videosConUbicacion.length < resultados && nextPageToken !== undefined){
    busqueda2(palabra);
  }

  console.log("sii");

  mostrarV();
}*/

function mostrarV(){
  //console.log("3");
  for (var i = 0; i < videosConUbicacion.length; i++) {
  var uluru = {lat: videosConUbicacion[i].recordingDetails.location.latitude, lng: videosConUbicacion[i].recordingDetails.location.longitude};
  var marker = new google.maps.Marker({
          position: uluru,
          map: map
  });
}

}

function search_b(palabra){
	limpiarArray();
	//var palabra = document.getElementById("query").value;
	//resultados = document.getElementById("").value;
	var query = 'https://www.googleapis.com/youtube/v3/search?q='+palabra+
	'&key=AIzaSyDBfqSNjORAlOBlhqf6CfAlES5We-2bK0M'+
	'&part=snippet&maxResults='+ resultados;
	xmlhttp=new XMLHttpRequest();

	xmlhttp.open("GET", query, false);
	xmlhttp.send();
	var data = JSON.parse(xmlhttp.responseText);
	//console.log(data);
  for (var i = 0; i < data.items.length; i ++) {
    videos.push(data.items[i]);
  }

  if(resultados >= 50){
    nextPageToken = data.nextPageToken;
    busqueda2(palabra);
  }else{
    sup = 0;
    ver="";
    reunir="";
    imprimir();
  }
}

function busqueda2(palabra){
  resultados = resultados - 50;

  if (resultados > 0  || nextPageToken !== undefined){
    if(resultados < 50){
      var query = 'https://www.googleapis.com/youtube/v3/search?q=' + palabra +
      '&key=AIzaSyDBfqSNjORAlOBlhqf6CfAlES5We-2bK0M' +
      '&regionCode=US&part=snippet&maxResults=' + resultados + '&pageToken=' + nextPageToken;
      xmlhttp=new XMLHttpRequest();

      xmlhttp.open("GET", query, false);
      xmlhttp.send();
      var data = JSON.parse(xmlhttp.responseText);
      nextPageToken = data.nextPageToken;

      for (var i = 0; i < data.items.length; i ++) {
        videos.push(data.items[i]);
      }

      busqueda2(palabra);
    }else{
      var query = 'https://www.googleapis.com/youtube/v3/search?q=' + palabra +
    	'&key=AIzaSyDBfqSNjORAlOBlhqf6CfAlES5We-2bK0M' +
    	'&regionCode=US&part=snippet&maxResults=' + 50 + '&pageToken=' + nextPageToken;
    	xmlhttp=new XMLHttpRequest();

    	xmlhttp.open("GET", query, false);
    	xmlhttp.send();
    	var data = JSON.parse(xmlhttp.responseText);
    	nextPageToken = data.nextPageToken;

      for (var i = 0; i < data.items.lengt; i ++) {
        videos.push(data.items[i]);
      }

      busqueda2(palabra);
    }
  }else{
  inic = 0;
  final = videos.length;
   ver="";
   reunir="";
    imprimir();
  }
}

function imprimir(){
  console.log(sup);
  if(sup > 0){
    if(sup < 10){
      for(i= sup; i<videos.length; i++){
        //var item = videos[i];
        console.log(i+" a");
        console.log(videos[i]);

        var ulr = "https://www.youtube.com/embed/" + videos[i].id.videoId + "?rel=0"

        ver += '<a class="carousel-item"><center style="width: 300px;">'+videos[i].snippet.title+'</center><iframe src="'+ulr+'"></iframe></a>'

        sup = i;

      }

      reunir += '<li><div  class="carousel">' + ver + '</div></li>' /*+ asi1[i]*/;
      imprimir();
    }else{
      for(i= sup; i<videos.length; i++){
        //var item = videos[i];
        console.log(i+ " b");
        console.log(videos[i]);
        var ulr = "https://www.youtube.com/embed/" + videos[i].id.videoId + "?rel=0"

        ver += '<a class="carousel-item"><center style="width: 300px;">'+videos[i].snippet.title+'</center><iframe src="'+ulr+'"></iframe></a>'
        sup = i;
      }
      reunir += '<li><div  class="carousel">' + ver + '</div></li>' /*+ asi1[i]*/;
      imprimir();
    }
  }else{
    var g = 'ito' + (j+1);
    console.log(g);
    document.getElementById(g).innerHTML= '<div class="slider"><ul class="slides">' + reunir + '</ul></div>' /*+ asi1[i]*/;

  }
}

function datosVideo(idVideo){
	//console.log("ok");
	xmlhttp = new XMLHttpRequest();
	var url = 'https://www.googleapis.com/youtube/v3/videos?id='+idVideo+
	'&key=AIzaSyDBfqSNjORAlOBlhqf6CfAlES5We-2bK0M&fields=items'+
	'(id,snippet(channelId,title,categoryId,publishedAt,description),recordingDetails,statistics)&part=snippet,recordingDetails,statistics'
	xmlhttp.open("GET", url, false);
	xmlhttp.send();
	var data = JSON.parse(xmlhttp.responseText);
	try{
		if (data.items[0].hasOwnProperty('recordingDetails') && videosConUbicacion.length < resultados) {
			if (data.items[0].recordingDetails.hasOwnProperty('location')){
				if (data.items[0].recordingDetails.location.hasOwnProperty('latitude')){
				console.log(data.items[0]);
				videosConUbicacion.push(data.items[0]);
			}
			}
		}
	}

	catch (err) {
		//console.log('Hubo un error');
	}
}

/*function busqueda2(palabra){
	//var palabra = document.getElementById("query").value;
	//var resultados = document.getElementById("resultados").value;
  if (nextPageToken !== undefined){
	var query = 'https://www.googleapis.com/youtube/v3/search?q=' + palabra +
	'&key=AIzaSyDBfqSNjORAlOBlhqf6CfAlES5We-2bK0M' +
	'&regionCode=US&part=snippet&maxResults=' + 50 + '&pageToken=' + nextPageToken;
	xmlhttp=new XMLHttpRequest();

	xmlhttp.open("GET", query, false);
	xmlhttp.send();
	var data = JSON.parse(xmlhttp.responseText);
	nextPageToken = data.nextPageToken;
	//console.log(data);
    for (var i = 0; i < data.items.length; i ++) {
  		datosVideo(data.items[i].id.videoId);
  	}
  }
}*/

function limpiarArray(){
  videosConUbicacion = [];
}





/*function onSearchResponse(response) {

  //alert(res)

  $(document).ready(function(){
    $('.carousel').carousel();
  });

  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

    var aux='';
    var aux1='';
    var j = 0;
    //var responseString = JSON.stringify(response, '', 2);
    //document.getElementById('results').innerHTML = responseString;y

    //alert(x);
    for(var i in response.items) {

      $(document).ready(function(){
        // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
        $('.modal').modal();
      });

            //alert('cs');

      var item = response.items[i];

      var ulr = "https://www.youtube.com/embed/" + item.id.videoId + "?rel=0"

      aux += '<a class="carousel-item" href="#'+ 'modal' + x + '' + i + '"><center style="width: 300px;">'+item.snippet.title+'</center><iframe src="'+ulr+'"></iframe></a>'
      //var ulr = "https://www.youtube.com/embed/" + item.id.videoId + "?rel=0"
      //aux1 += '<div id="'+ 'modal' + x + '' + i + '" class="modal"><div class="modal-content"><h4>Modal Header</h4><p><div class="video-container"><iframe width="560" height="315" src="'+ ulr +'" frameborder="0" allowfullscreen></iframe></div></p></div><div class="modal-footer"><a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a></div></div>'


      //var item = response.items[i];
      //alert(item.snippet.thumbnails.high.url);
    }

    asi.push(aux);
    //asi1.push(aux1);

    //alert(aux1);

    x = x + 1;

    for(i=0; i< res ;i++){

      $(document).ready(function(){
        // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
        $('.modal').modal();
      });
            //alert(aux);

      //alert('no')


      var g = 'ito' + (j+1)
      document.getElementById(g).innerHTML= '<div  class="carousel">' + asi[i] + '</div>' /*+ asi1[i]*/;
/*
      j = j + 1;
    }
}
*/
