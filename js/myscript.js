$(function(){

	let key = 'NkQepuKr4nG8QfuWMVxDJcB7xGOKMB0t';

	let projectHTML = $('#templateProject').text();
	/* this is extracting the text from our template7 script in our HTML */
	let projectTemplate = Template7(projectHTML).compile();

	let urlProjects = 'https://api.behance.net/v2/users/Essuom/projects?client_id='+key;

	$.ajax({
		url:urlProjects,
		dataType:'jsonp', // p means padded json . 
		success:function(res){ // res stands for response
			
		_(res.projects).each(function(project){ //looping through the lsit of projects to get each project
				
				// console.log(project);
				 
				 let output = projectTemplate(project)
				 /* this is calling the function to insert the project data into the DOM */
				 $('.project-container').append(output);
				 /* this is inputting the data into the container we created in the HTML */

			});

		}		

	});	


	//Showing individual projects

	let singleProjectHTML = $('#templateSingleProject').text();
	let singleProjectTemplate = Template7(singleProjectHTML).compile();

	$('#portfolioModal1').on('show.bs.modal', function(e){
		let target = e.relatedTarget;
		let projectid = $(target).data('projectid');
		let urlProject = 'http://www.behance.net/v2/projects/'+projectid+'?api_key='+key;

		$.ajax({
			url:urlProject,
			dataType:'jsonp',
			success:function(res){
				
				let project = res.project;
				console.log(project);

				let output = singleProjectTemplate(project);
				$('.single-project-container').empty();
				$('.single-project-container').append(output);
			}

		});
		
	});

});