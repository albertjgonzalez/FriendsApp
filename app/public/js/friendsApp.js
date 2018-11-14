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
    // for(var i = 1; i<11; i++){
    //     var answer = $(`input[name='tq${i}']:checked`).val()
    //     studentResponse.push(answer)
    // }
    $.post("/api/student", studentResponse,
        function (data) {

            $('#tutorInfo').html(`
                <b  style="font-size: 20px !important; font-weight: 900 !important;">Name:</b><span>${data.name}</span></br>
                <b  style="font-size: 20px !important; font-weight: 900 !important;">Email:</b><span>${data.email}</span>
                `)
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
const tutorsList = [
    {
        'name': 'Ahmed',
        'scores': [
            5,
            3,
            4,
            7,
            2,
        ]
    },
    {
        'name': 'Bert',
        'scores': [
            5,
            3,
            4,
            7,
            2,
        ]
    },
    {
        'name': 'GOD',
        'scores': [
            5,
            3,
            4,
            7,
            2,
        ]
    },
];
