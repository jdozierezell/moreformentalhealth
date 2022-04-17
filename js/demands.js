
$('#demands_readmore').click(function() {
$('#demands_info').addClass('readmore_open');
});

$('#demands_readless').click(function() {
$('#demands_info').removeClass('readmore_open');
});



var MyChapterHtml = "";
var myZipCode = "";

$('#zip_code-form').submit(function( event ) {

$('#myChapterInfo').html("");
MyChapterHtml = "";


if ($('#zip_code-field').val()) {
$('#myChapterInfo').addClass("myChapter-loading");
myZipCode = $('#zip_code-field').val();


                
                    axios
                        .post(
                            'https://serene-dusk-44738.herokuapp.com/zip-lookup',
                            {
                                zip: myZipCode,
                                radius: 0,
                                type: 'chapter',
                            }
                        )
                        .then(res => {
                            //setDisplayChapters(res.data.chapterArray)
                            return res.data.chapterArray
                            
                        })
                        .then(chapters => {
                            chapters.forEach(chapter => {
                                delete chapter[0].zips                                
                                //console.log(chapter[0].title)                                
                                //console.log(chapter[0].slug)
                                //console.log(chapter[0].staffEmail)
                                //console.log(chapter[0].map.url)
                                
                                $('#myChapterInfo').html("");
                                MyChapterHtml = "";
                                
                                MyChapterHtml = MyChapterHtml + "<div id=\"actions_local-link\"><div id=\"actions_local-link-frame\">";
                                MyChapterHtml = MyChapterHtml + "<a href=\"https://afsp.org/chapter/" + chapter[0].slug + "/\" target=\"_blank\" ><span class=\"ftw_afsp ftw_afsp2\">";
                                MyChapterHtml = MyChapterHtml + " AFSP " + chapter[0].title + "</span></a>";
                                MyChapterHtml = MyChapterHtml + "</div></div>";
                                
                                $('#myChapterInfo').html("");
                                $('#myChapterInfo').removeClass("myChapter-loading");
                                $('#myChapterInfo').html(MyChapterHtml);
                                
                                $(".ftw_afsp2").removeAttr("style");
                                ftw_fit(".ftw_afsp2", [{method:"font-variation-settings:wdth", min:50, max:150},"transform"]);
                                
                                
                                
                                
                                
                            })
                            sessionStorage.setItem(
                                'chapters',
                                JSON.stringify(chapters)
                            )
                            console.table(chapters);
                                if (MyChapterHtml === '') {
                                $('#myChapterInfo').removeClass("myChapter-loading");
                                $('#myChapterInfo').html("No local chapter found, try again");
                                }
                            
                            
                        })
                        
                        





}

else {
console.log( "Zipcode missing" );

}


  
event.preventDefault();

});


