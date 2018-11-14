$("#submit").on("click", function (event) {
    event.preventDefault();
    var studentResponse = {
        name: $('#name').val(),
        email: $('#email').val(),
        answers:[
            $(`input[name='tq1']:checked`).val(),
            $(`input[name='tq2']:checked`).val(),
            $(`input[name='tq3']:checked`).val(),
            $(`input[name='tq4']:checked`).val(),
            $(`input[name='tq5']:checked`).val(),
            $(`input[name='tq6']:checked`).val(),
            $(`input[name='tq7']:checked`).val(),
            $(`input[name='tq8']:checked`).val(),
    ]}
    $.post("/api/student", studentResponse,
        function (data) {
            console.log(data)
            for(var i = 0; i<data.length; i++){
                if (data.length>1){
                    $('#modalTitle').html(`
                        We think these tutors might be a perfect match.
                    `)
                }
                $('#tutorInfo').append(`
                <div style="border-top: solid rgba(0, 0, 0, 0.1) 2px;">
                <b  style="font-size: 20px !important; font-weight: 900 !important;">Name:</b><span>${data[i].name}</span></br>
                <b  style="font-size: 20px !important; font-weight: 900 !important;">Email:</b><span>${data[i].email}</span>
                </div>
                `);
            }
        });
        $('#myModal').modal('show');
});

$("#submit2").on("click", function (event) {
    event.preventDefault();
    var tutorResponse = {
        name: $('#name').val(),
        email: $('#email').val(),
        answers:[
            $(`input[name='tq1']:checked`).val(),
            $(`input[name='tq2']:checked`).val(),
            $(`input[name='tq3']:checked`).val(),
            $(`input[name='tq4']:checked`).val(),
            $(`input[name='tq5']:checked`).val(),
            $(`input[name='tq6']:checked`).val(),
            $(`input[name='tq7']:checked`).val(),
            $(`input[name='tq8']:checked`).val(),
        ]}
        console.log(tutorResponse)
    // for(var i = 1; i<11; i++){
    //     var answer = $(`input[name='tq${i}']:checked`).val()
    //     studentResponse.push(answer)
    // }
    $.post("/api/tutor", tutorResponse,
    function (data) {
        
        $('.modal-body').html(`
            <b  style="font-size: 20px !important; font-weight: 900 !important;">
            Thank you ${tutorResponse.name} for becoming a tutor, students will be contacting you shortly!
            </b>
            `)
    });
    $('#myModal').modal('show');

});

$(".close-button").on('click',(event) =>{
    event.preventDefault();
    window.location = "/";
});