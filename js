
    var locationData =[{"Id":"8d780684-1524-4bda-b138-7c71a8591944","Name":"Rabat","Code":"RABAT"},{"Id":"889689b5-1099-4795-ac19-c9263da23252","Name":"Tetouan","Code":"TETOUAN"},{"Id":"8457a52e-98be-4860-88fc-2ce11b80a75e","Name":"Tangier","Code":"TANGIER"},{"Id":"0566245a-7ba1-4b5a-b03b-3dd33e051f46","Name":"Nador","Code":"NADOR"},{"Id":"138660df-f645-488f-8458-97186b17c7f9","Name":"Agadir","Code":"Nador"},{"Id":"60d2df036755e8de168d8db7","Name":"Casablanca","Code":"CASABLANCA"},{"Id":"fcb38886-b576-454b-9288-33a9b9bce602","Name":"Algeria","Code":"Algeria"}];
    var AppointmentCategoryIdData =[{"Id":"5c2e8e01-796d-4347-95ae-0c95a9177b26","Name":"Normal","Code":"CATEGORY_NORMAL"},{"Id":"37ba2fe4-4551-4c7d-be6e-5214617295a9","Name":"Premium","Code":"CATEGORY_PREMIUM"},{"Id":"0ec883de-84f4-4474-ae60-572e675873cb","Name":"Prime Time","Code":"PRIME_TIME"}];
      var visaIdData =[{"Id":"fb33a698-a3bd-4b02-8ef7-b589775187df","Name":"National Visa","VisaTypeCode":"NATIONAL_VISA"},{"Id":"c805c157-7e8f-4932-89cf-d7ab69e1af96","Name":"Schengen Visa","VisaTypeCode":"SCHENGEN_VISA"}];
    var baseurl = 'https://blsemployee.aitalkx.com/webapi/';
     var visasubIdData =[{"Id":"3336ebda-c3bd-495d-a76e-07287c70dc2d","Name":"Residence visa with working permit exemption","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"707c139d-f8f4-43d2-9e84-95f80e6c931e","Name":"Long-term residence permit recuperation visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"87c2f718-b967-48f6-a230-206e0f58dd56","Name":"EU National Family Member Visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"0c6445de-03f8-4a52-92ae-a3f647e6644c","Name":"Work Visa( employee working for somebody else)","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"134c3629-9a22-4eae-b263-c68124288cc3","Name":"Select Visit Purpose","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"1880ff4a-fd0d-4ec8-920e-fb9358d75f41","Name":"Study Less Than 90 Days","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"4cba88b7-7273-4b21-991f-b6d5af88d796","Name":"Study More Than 180 Days","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"4be2078c-d214-42a6-a3cb-465e7ff3a525","Name":"Internship Program Visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"7e8ef073-3abd-4fa5-ad66-44bf6326effc","Name":"Study Family Member ","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"8f96a4cc-abd9-4602-bcaf-f5b04c994695","Name":"Relocation With In The Same Company","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"ec498f00-5a86-4b2e-bca7-7a6b5b8b1d52","Name":"National Visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"c8c6fdc1-bfd1-4cc4-b389-9c5d0d503105","Name":"afdgdffgfd","Value":null},{"Id":"1782082b-2280-44a5-984e-df9190e410cc","Name":"Test","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"ab828ce6-d1b3-46e0-8e91-8ffa27d2b6d7","Name":"Schengen Visa","Value":"c805c157-7e8f-4932-89cf-d7ab69e1af96"},{"Id":"9b470d09-dc01-4c32-87eb-1f37c6e532fa","Name":"Study More Than 180 Days","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"fbf41aee-a425-46fa-a0a7-2b9845ac8b0c","Name":"Family Reunification Visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"56157b18-82f4-4458-9369-f85d094b7c13","Name":"Test","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"5fdeb1d8-685b-4f98-86cb-5a4ef4551299","Name":"TestAv","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"f56aa595-edb1-415d-82bc-e1c4f32d6479","Name":"TestAv","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"f9199aa9-7083-4084-b217-e77f7f0f0542","Name":"TestAv","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"f4517d5a-3fe2-4862-aa73-ee590550b2f4","Name":"TestAv","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"c83a9fe8-6cc0-438b-9534-9982a4d7a96c","Name":"NewTest","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"84f24e02-150c-4bd4-9347-13bf418898a0","Name":"Long-term residence visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"cd3c6189-16d7-486d-b8a9-5830dcd87b11","Name":"Entrepreneur visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"a02e3fcc-8178-4463-90b8-60fa472e675a","Name":"Investor visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"ccd817eb-c023-4eff-aac9-f6c394e7427f","Name":"Student Visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"b3818128-a15b-494f-922b-ae5ef44ef44a","Name":"TestAv","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"95478eca-0d60-4083-bb26-f1357a7951b1","Name":"Newdata","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"2ed460fb-b849-4b45-bd16-535cb39cf392","Name":"TestAv","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"ecf954b7-7869-486f-96ba-eeea93b887c9","Name":"TestAv","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"4053aee7-194a-4c70-91bc-6bbb796dca4c","Name":"TestAv","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"249c2002-3054-45db-bbfc-adce6482488b","Name":"Investment Visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"c3d3514c-599a-4b40-b157-fe2ac4ade0eb","Name":"Residence and Employment Work Visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"5ced1786-8bbb-495e-99a2-c0a6179119b3","Name":"Internship visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"6d9e0818-54e5-4774-bcac-1e278c11656b","Name":"Researcher visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"37eef453-2caf-4559-97e9-307704381a50","Name":"Highly qualified Work Visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"a8d99e75-4693-4f69-aecb-bea75f8c9bea","Name":"Non-lucrative residence visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"e9b01d51-2e39-461e-8ae8-9e381a3cf84a","Name":"Visa for highly qualified workers and for intra-company transfers","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"f1cbd765-3a3b-43a4-bf02-6501ecf5b64e","Name":"Study between 90 and 179 days","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"f743c6c1-8827-47de-8e87-791b49c8d5fb","Name":"Non-working residency visa (non-lucrative visa)","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"ba739d8c-cc24-4880-8fbd-6075907d6355","Name":"Long-term residence or EU Long-term residence recover","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"},{"Id":"c325bdb4-d7a5-4b39-8b02-93e7f1376a1e","Name":"Self-employed work visa","Value":"fb33a698-a3bd-4b02-8ef7-b589775187df"}];
     var missionData =[{"Id":"33f113d1-fa23-4292-b865-393675093998","Name":"Consulate - Tetouan","Code":"CONSULATE_TETOUAN"},{"Id":"2c64c42a-1359-437a-9257-d8ad3f566e1a","Name":"Consulate - Nador","Code":"CONSULATE_NADOR"},{"Id":"98a73e17-bf8f-41f2-933e-03e60b009327","Name":"Consulate - Rabat","Code":"CONSULATE_RABAT"},{"Id":"beae2d19-89a9-46e7-9415-5422adafe619","Name":"Consulate - Casablanca","Code":"CONSULATE_CASABLANCA"},{"Id":"d2b4c1e0-2b7e-4fcf-929b-65d6f87e5742","Name":"Algeria","Code":"Algeria"},{"Id":"4edec922-cd94-4955-9788-802269c9ff44","Name":"Consulate - Agadir","Code":"CONSULATE_AGADIR"},{"Id":"d133459a-6482-45ed-bd00-5ff32aa8b71b","Name":"Consulate - Tangier","Code":"CONSULATE_TANGIER"}];

    var familyModalClose = false;
    var livenessDeclarationModalClose = false;
    var userConsentModalClose = false;
    $(document).ready(function () {
        $('#userConsent').modal('show');


        $("#AppointmentCategoryId").kendoDropDownList({
           // optionLabel: "--Select--",
            dataTextField: "Name",
            dataValueField: "Id",
            filter: "contains",
            autoBind: true,
           // change: LoadAppointmentDates,
            value:["5c2e8e01-796d-4347-95ae-0c95a9177b26","37ba2fe4-4551-4c7d-be6e-5214617295a9"],
            dataSource: AppointmentCategoryIdData
        });
        if ('WEB_BLS'==='WEB_BLS')
        {
             $("#LocationId").kendoDropDownList({
            optionLabel: "--Select--",
            dataTextField: "Name",
            dataValueField: "Id",
            autoBind: true,
            filter: "contains",
            value:'60d2df036755e8de168d8db7',
            //change: LoadAppointmentDates,
            dataSource: locationData
        });
        }

          $("#MissionId").kendoDropDownList({
            optionLabel: "--Select--",
            dataTextField: "Name",
            dataValueField: "Id",
            autoBind: true,
              filter: "contains",
              value: '',
            //change: LoadAppointmentDates,
            dataSource: missionData
        });

         $("#VisaType").kendoDropDownList({
            optionLabel: "--Select--",
            dataTextField: "Name",
            dataValueField: "Id",
             filter: "contains",
             autoBind: true,
            value:'c805c157-7e8f-4932-89cf-d7ab69e1af96',
             dataSource: visaIdData
        });

         $("#VisaSubTypeId").kendoDropDownList({
            optionLabel: "--Select--",
            dataTextField: "Name",
            dataValueField: "Id",
            filter: "contains",
            autoBind: true,
            value:'ab828ce6-d1b3-46e0-8e91-8ffa27d2b6d7',
             dataSource: visasubIdData
        });


        var slotFooter = kendo.template($("#slot-footer-template").html());
        var slottemplate = kendo.template($("#Slottemplate").html());
        var height = 500;

        $("#ApplicantsNo").kendoDropDownList({
            optionLabel: "--Select--",
            dataTextField: "Name",
            dataValueField: "Value",
            filter: "contains",

            autoBind: true,
            dataSource: [
                { Name: "2 Members", Value: "2" },
                { Name: "3 Members", Value: "3" },
                { Name: "4 Members", Value: "4" },
                { Name: "5 Members", Value: "5" },
                { Name: "6 Members", Value: "6" },
            ]
        });

        const fileInput = document.getElementById('uploadfile-1');

        fileInput.onchange = () => {
            ShowLoader();
            const selectedFiles = [...fileInput.files];
            var fd = new FormData();
            var files = selectedFiles;

            // Check file selected or not
            if (files.length > 0) {
                fd.append('file', files[0]);
            }

            $.ajax({
                url: "/MAR/query/UploadProfileImage",
               //url: baseurl + "common/query/UploadProfileImage",
                type: 'post',
                data: fd,
                contentType: false,
                processData: false,
                success: function (result) {
                    HideLoader();

                    if (result.success) {
                        $("#uploadfile-1-preview").attr("src", "/MAR/query/getfile?fileid=" + result.fileId);
                        $("#ApplicantPhotoId").val(result.fileId);
                        $('#photoUploadModal').modal('show');
                    }
                     else{
                        alert(result.err);
                    }
                }
            });
        }

        if('Individual'=='Family'){
            $("#members").show();
           var appointmentFor = document.getElementById("family");
            appointmentFor.checked = true;
             $("#ApplicantsNo").data('kendoDropDownList').value("1");
        }

        var evc=document.getElementById("EmailVerificationCode");
         evc.onpaste = e => e.preventDefault();
        evc.oncopy = e => e.preventDefault();
        $("#AppointmentDate2").on("keydown", function (e) {
            e.preventDefault();
        });
        $("#AppointmentDate2").on("click", function (e) {
            $("#AppointmentDate2").data("kendoDatePicker").open();
            e.preventDefault();
        });

        $('#familyDisclaimer').on('hide.bs.modal', function (e) {
            if (!familyModalClose) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
            familyModalClose = false;
            return true;
        });
        $('#LivenessDeclaration').on('hide.bs.modal', function (e) {
            if (!livenessDeclarationModalClose) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
            livenessDeclarationModalClose = false;
            return true;
        });
        $('#userConsent').on('hide.bs.modal', function (e) {
            if (!userConsentModalClose) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
            userConsentModalClose = false;
            return true;
        });
    });
    function OnChangePhoto() {
         $("#uploadfile-1-preview").attr("src", "/assets/images/avatar/01.jpg");
        $("#ApplicantPhotoId").val("");
    }
    function OnPhotoAccepted() {
        $(".upload-photo-btn").hide();
    }
    function OnSlotSelect(e) {
        if (e.dataItem.Count <= 0) {
            e.preventDefault();
        }
    }
    function OnSlotChange(e) {
        var dataItem = e.sender.dataItem();
        if (dataItem.Count<=0) {
            e.preventDefault();
        }
    }
    function OnSlotOpen() {

        this.setDataSource(slotDataSource);
        var id = this.element.attr("id");
        var values = '';
        if (id !=='AppointmentSlot2') {
            values = values + $("#AppointmentSlot2").data("kendoDropDownList").value();
        }
        var items = this.items();
        for (let item of items) {
            var dataItem = this.dataItem($(item));
            if (dataItem.Count > 0) {
                var reg = new RegExp(dataItem.Id, 'g');
                var count = (values.match(reg) || []).length;
                if (dataItem.Count <= count) {
                    dataItem.Count = 0;
                    $(item).find(".slot-item").css("background-color", '#ff6666');
                    $(item).find(".slot-item").css("cursor", 'not-allowed');
                    $(item).addClass("k-disabled");
                    $(item).find(".slot-item").addClass("k-disabled");
                }
            }
        }
    }
    var allowedDates = [];




     function onFeeSubmit(ispayment) {
        var data = {
            Id: $("#Id").val(),
            ValueAddedServices: $("#ValueAddedServices").val(),
        };

            ShowLoader();
        var id = $("#Id").val();
            $.ajax({
                type: "POST",
                data:data,
                url: "/MAR/BLSAppointment/TotalFeeUpdate",
                success: function (data) {
                    HideLoader();
                    if (data.success) {
                        $("#paymentDetails").removeClass("text-primary");
                        $("#paymentDetails").addClass("text-success");
                        document.getElementById("progress-percent").innerHTML = '75%'
                        $('.progress-bar').css('width', '80%');
                        if (ispayment) {
                            OnPaymentInitiated(data.model);
                        }
                        else {
                            OnAppointmentInitiated(data.model);
                        }

                    }
                    else {
                        ShowError(data.error);
                    }

                },
                error: function (err) {
                    HideLoader();
                }
            });

    }


    function OnUserConsentReject() {
        userConsentModalClose = true;
        alert("You cannot proceed with appointment. System will redirect to home page");
        window.location.href = "/MAR/home/index";
    }
    function OnUserConsentAccept() {
        userConsentModalClose = true;
        $('#userConsent').modal('hide');
        $('#scamAlert').modal('show');
        return true;
    }
    var slotDataSource = null;
    function OnAppointmentDateOpen(e) {
        var t = kendo.template($("#date-footer-template").html());
        var dp = this;
        setTimeout(function () {
            var div = dp.dateView.popup.wrapper.find(".k-footer").find("#date-legend");
            div.remove();
            dp.dateView.popup.wrapper.find(".k-footer").append(t({ text: "testing" }));
        });
    }
    function OnAppointmentdateChange() {

        var applicantCount = $("#ApplicantsNo").val();
        if (applicantCount == '' || applicantCount == null || applicantCount == undefined) {
            applicantCount = 1;
        }

        var ad = $("#AppointmentDate2").data("kendoDatePicker").value();
        var slot = $("#AppointmentSlot2").data("kendoDropDownList");
        slot.value("");
        slot.setDataSource([]);
        if (ad === null || ad === '' || ad === undefined) {
            slot.value("");
            slot.enable(false);
            return false;
        }
        var appointmentDate = kendo.toString(ad, 'yyyy-MM-dd');
        var locationId = $("#LocationId").val();
        var mid = $("#MissionId").val();
        var categoryId = $("#AppointmentCategoryId").val();
        var ds = $("#DataSource").val();
        var visaType = $("#VisaType").val();
        var visasubType = $("#VisaSubTypeId").val();
        ShowLoader();
        $.ajax({
            type: "POST",
            url: "/MAR/blsappointment/GetAvailableSlotsByDate?appointmentDate=" + appointmentDate + "&locationId=" + locationId + "&categoryId=" + categoryId + "&visaType=" + visaType + "&visaSubType=" + visasubType + "&applicantCount=" + applicantCount + "&dataSource=" + ds + "&missionId=" + mid,
            dataType: "json",
            success: function (data) {
                HideLoader();
                slotDataSource = data;
                slot.enable(true);
            }
        });
    }

    //function renderSlot(index) {

    //    var maindiv = document.getElementById("appSlotInner");
    //    var div = document.createElement('div');
    //    div.className = "col-sm-4 col-md-3 col-lg-3";
    //    var div1 = document.createElement('div');

    //    div1.className = "form-group";

    //    div.appendChild(div1);
    //    maindiv.appendChild(div);

    //    var label = document.createElement('label');
    //    label.className = "form-label";
    //    label.innerHTML = "Applicant Slot " + (index + 1);

    //    div1.appendChild(label);

    //    var div2 = document.createElement('div');
    //    div2.className = "ddlSlot";
    //    div1.appendChild(div2);

    //    var input = document.createElement('input');

    //    input.id = "AppointmentSlot" + index;

    //    div2.appendChild(input);
    //}

    //function OnChangeSlot() {
    //    return;
    //    var applicantsCount = $("#ApplicantsNo").val();
    //    var appCount = 1;
    //    if (applicantsCount == '' || applicantsCount == null) {
    //        appCount = 1;
    //    }
    //    else {
    //        applicantsCount = applicantsCount.split(" ")[0];
    //        appCount = applicantsCount;
    //    }

    //    var dateVal2 = kendo.toString($("#AppointmentDate").data("kendoDatePicker").value(), 'yyyy/MM/dd');

    //    var locVal = $("#LocationId").val();

    //    var category = $("#AppointmentCategoryId").val();
    //    var slotidsV = "";
    //    for (var j = 0; j < appCount; j++) {

    //        var slots = $("#AppointmentSlot" + j).val();
    //        if (slots != '' && slots != null) {
    //            slotidsV += slots + ",";
    //        }
    //    }
    //   // console.log(slotidsV);
    //    //alert(slotidsV);
    //    var slotDataSource = new kendo.data.DataSource({
    //        transport: {
    //            read: {
    //                url: "/blsappointment/GetSlotsList?date=" + dateVal2 + "&loc=" + locVal + "&category=" + category + "&slotids=" + slotidsV,
    //                //url: baseurl + "bls/query/GetSlotsList?date=" + dateVal2 + "&loc=" + locVal + "&category=" + category + "&slotids=" + slotids,
    //                dataType: "json"
    //            }
    //        },
    //    });

    //    for (var j = 0; j < appCount; j++) {

    //        var slots = $("#AppointmentSlot" + j).val();

    //        var dropdownlist = $("#AppointmentSlot" + j).data("kendoDropDownList");
    //        dropdownlist.value(slots);
    //        dropdownlist.setDataSource(slotDataSource);
    //    }
    //}

    function disableDates(date) {
        var dateVal = kendo.toString(date, 'yyyy-MM-dd');
        var result = allowedDates.find(x => x.DateText === dateVal);

        if (result === null || result === undefined || result.AppointmentDateType>0) {
            return true;
        }
        else {
            return false;
        }
    }
    function ShowCommonModal(header, body) {

        $('#commonModalHeader').html(header);
        $('#commonModalBody').html(body);
        $('#commonModal').modal('show');
    }
    function RequestCode(e, source,isRefresh) {

        var valid = ValidateAppointment(e);
        if (valid == false) {
            return false;
        }
        var html = $(source).html();
        var email = $("#Email").val();
        $(source).attr("disabled", true);
        if (isRefresh) {
            $(source).html('<i class="fa fa-loader fa-spin"></i>');
        }
        else {
            $(source).html('Sending<span class="pl-3 fa fa-refresh fa-spin"></span>');
        }
        $.ajax({
            type: "GET",
            url: "/MAR/blsappointment/SendAppointmentVerificationCode?code=PGME1wepAQguslHGcPwxnqkOUezi43fYd6oTgcQURJkJkFU3vlKxFIFXYcJe9VpwGQYUbf%2fFVsAdr48mwRbGHNe5ksLAQZOaNrzhKErCV9nnhOyC0CXYRqcLARL7Xm4b",
            dataType: "json",
            success: function (data) {
                $(source).removeAttr("disabled");
                if (data.success) {
                    //HideLoader();
                    $(source).html(html);
                    $(source).attr("disabled", false);
                    ShowCommonModal('OTP Sent',' An OTP has been sent on your registered e-mail ID. Do not share this OTP with any unauthorized personnel.');

                    $('#btnSenderificationCode').html('Resend Verification Code');
                    $('#btnSenderificationCode').removeClass('btn-primary');
                    $('#btnSenderificationCode').addClass('btn-light');
                    $(".div-email-code").show();
                    if ('False'==='True') {
                        $(".div-mobile-code").show();
                    }
                    else {
                        $(".div-mobile-code").hide();
                    }

                }
                else {
                    if (data.sessionExpired) {
                        alert('Your session has been expired. Please login again to continue.');
                        window.location.href = "/MAR/blsappointment/manageappointment";
                        return false;
                    }
                    $(source).attr("disabled", false);
                     $(source).html(html);
                    ShowError(data.error);
                }
            }
        });
    }

    function VerifyApplicant() {
        var code = $("#EmailVerificationCode").val();
        if (code === '' || code === null || code === undefined) {
            ShowError("Please enter email verification code.");
            return false;
        }
        var img = $("#ApplicantPhotoId").val();
        if (img === '' || img === null || img === undefined) {
            ShowError("Please upload applicant photo.");
            return false;
        }
        $('#LivenessDeclaration').modal('show');
        return false;
    }
    function OnLivenessDeclarationReject() {
        livenessDeclarationModalClose = true;
        $('#LivenessDeclaration').modal('hide');
    }
    function OnLivenessDeclarationAccept() {
        livenessDeclarationModalClose = true;
        $('#LivenessDeclaration').modal('hide');
        var img = $("#ApplicantPhotoId").val();
        var appointmentId = $("#Id").val();
        var url = '/MAR/blsappointment/livenessdetection?appointmentId=' + appointmentId + '&applicantPhotoId=' + img;
        OpenPopup(url, { Title: "Verify Applicant", Width: 800, Height: 650 });
        return false;
    }

    function OnApplicantVerified(prm) {
        if (prm.session) {
            $("#btnVerifyApplicant").hide();
            window.location.href = "/MAR/blsappointment/manageappointment";
            return false;
        }
        if (prm.redircet) {
            $("#btnVerifyApplicant").hide();
            window.location.href = "/MAR/blsappointment/manageappointment";
            return false;
        }
        var photo=prm.photo;
        $("#ImageId").val(photo);
        $("#btnVerifiedApplicant").show();
        $("#btnVerifyApplicant").hide();
        $("#btnPayAmount").show();
    }
    function VerifyEmailCode(e, source) {
        var valid = ValidateAppointment(e);
        if (valid == false) {
            return false;
        }
        var code = $("#EmailVerificationCode").val();
        if (code === '' || code === null || code === undefined) {
            ShowError("Please enter email verification code.");
            return false;
        }
        var html = $(source).html();
        $(source).attr("disabled", true);
        $(source).html('Verifying Email<span class="ml-2 fa fa-refresh fa-spin"></span>');
        var code = $("#EmailVerificationCode").val();
        var data = {
            Code: code,
            Value: 'PGME1wepAQguslHGcPwxnqkOUezi43fYd6oTgcQURJkJkFU3vlKxFIFXYcJe9VpwGQYUbf/FVsAdr48mwRbGHNe5ksLAQZOaNrzhKErCV9nnhOyC0CXYRqcLARL7Xm4b',
            Id:  $('#Id').val()
        }
            $.ajax({
            type: "POST",
            url: "/MAR/blsappointment/VerifyEmail",
                dataType: "json",
                data:data,
            success: function (data) {
                $(source).removeAttr("disabled");
                if (data.success) {
                    $(source).html(html);
                    $(source).attr("disabled", false);
                    $("#btnVerifyEmail").hide();
                    $("#btnVerifiedEmail").show();
                    $("#EmailVerified").val('True');
                    if ('False'==='True') {
                        var mobVerified = $("#MobileVerified").val();
                        if (mobVerified.toLowerCase() === 'true') {
                            $("#btnVerifyAppointment").show();
                        }
                    }
                    else {
                        $("#btnVerifyAppointment").show();
                    }
                }
                else {
                    $(source).attr("disabled", false);
                     $(source).html(html);
                    ShowError(data.error);
                }
            }
        });

    }
     function VerifyAppointment(e, obj) {
        var valid = ValidateAppointment(e);
        if (valid == false) {
            return false;
        }
        var code = $("#EmailVerificationCode").val();
        if (code === '' || code === null || code === undefined) {
            ShowError("Please enter email verification code.");
            return false;
        }
        var img = $("#ApplicantPhotoId").val();
        if (img === '' || img === null || img === undefined) {
            ShowError("Please upload applicant photo.");
            return false;
        }
        var win = GetMainWindow();
        win.iframeOpenUrl = '/MAR/CaptchaPublic/GenerateCaptcha?data=7aY2x5vFjGjjJLzFqRYUYqmnOLSrpV0%2f85gkb26SR5x2jsWrOZDmxa%2f5IaJ9E0ph8u6q0z6fTn80qfGQy%2fo6sySyU6Swcbo0yeXQkpqBjjU%3d';
        win.OpenWindow({ Title: "Verify Appointment", Width: 400, Height: 600 });
        return false;
    }
    function OnVarifyCaptcha(res) {
        if (res.exceeded) {
            window.location.href = window.location.href.split("?")[0];
            return false;
        }
        else if (res.success) {
            $("#btnVerifiedAppointment").show();
            $("#btnVerifyAppointment").hide();
            $("#btnSubmit").show();
            $("#CaptchaData").val(res.captcha);
        }
    }
    var AppointmentData = [];
    function OnAppointmentSubmit(e) {
        var valid = ValidateAppointment(e);
        if (valid == false) {
            return false;
        }
        var detailsString = JSON.stringify(AppointmentData);
        $("#AppointmentDetailsList").val(detailsString);
        return true;
    }

    function ValidateAppointment(e) {
        HideError();
        var mobile = $("#Mobile").val();
        var mobileCC = $("#MobileCountryCode").val();
        var email = $("#Email").val();
        var loc = $("#LocationId").val();
        if (loc == '') {
            ShowError("Please select appointment center");
            return false;
        }
        if ($("#AppointmentCategoryId").val() == '') {
            ShowError('Please select appointment category');
            return false;
        }
        if ($("#AppointmentDate2").val() == '') {
            ShowError('Please select appointment date');
            return false;
        }

        var ad = kendo.toString($("#AppointmentDate2").data("kendoDatePicker").value(), 'yyyy-MM-dd');
        $("#ServerAppointmentDate").val(ad);

        if (mobile == '') {
            ShowError('Please enter mobile number');
            return false;
        }
        if (mobileCC == '') {
            ShowError('Please enter mobile Country Code');
            return false;
        }
        if (email == '') {
            ShowError('Please enter email id');
            return false;
        }
        if ($("#AppointmentSlot2").val() == '') {
            ShowError('Please select appointment slot');
            return false;
        }
        var applicantsCount = $("#ApplicantsNo").val();
        if (applicantsCount == '' || applicantsCount == null) {
            $("#ApplicantsNo").val(1);
            applicantsCount = 1;
        }

        //AppointmentData = [];
        //AppointmentData[0] = {};
        //AppointmentData[0]["AppointmentSlot"] = $("#AppointmentSlot0").val();
        //AppointmentData[0]["Id"] = "";
        //AppointmentData[0]["ApplicantSerialNo"] = 1;
        //for (var k = 1; k < applicantsCount; k++) {

        //    AppointmentData[k] = {};
        //    AppointmentData[k]["AppointmentSlot"] = $("#AppointmentSlot0").val();
        //    AppointmentData[k]["Id"] = "";
        //    AppointmentData[k]["ApplicantSerialNo"] = k;
        //}
        return true;
    }

    function onAgree() {
        $("#appDetails").removeClass("text-primary");
        $("#appDetails").addClass("text-success");
        $("#appointmentDetails").removeClass("text-secondary");
        $("#appointmentDetails").addClass("text-primary");
        document.getElementById("progress-percent").innerHTML='25%'
        $('.progress-bar').css('width', '25%');
        $("#termsDiv").hide();
        $("#applicantDetailsDiv").show();
        BackToTop();
    }

    function onDisagree() {
        window.location.href = "/";
        //LoadPartailView('/MAR/BLSApplication/BLSCustomerHome', $('#cms-content'));
    }

    var onAjaxSuccess = function (res) {
        if (res.success) {
            HideLoader();
            $("#appointmentDetailsDiv").hide();
            $("#termsDiv").show();
            $("#applicantDetailsDivForm").load('/MAR/BlsAppointment/VisaAppointmentForm?appointmentId=' + res.model.Id);
            setStatus(res.model.SaveState);
            BackToTop();
        }
        else {
            if (res.bot === true) {
                window.location.href = "/MAR/account/bot";
                return false;
            }
            if (res.userverify === true) {
                alert(res.error);
                window.location.href = "/MAR/account/UserVerification?userId=" + res.uid;
                return false;
            }
            HideLoader();
            ShowError(res.error);
            if (res.refreshSlot === true) {
                LoadAppointmentDates('2','2');
            }
        }
    };

    //payment details


    //function getRow(n) {
    //    var row = n.parentNode.parentNode;
    //    var cols = row.getElementsByTagName("td");
    //    var x = cols[4].textContent;
    //    var y = $("#totalCharges").html();
    //    if (n.checked) {
    //        var z = parseInt(x) + parseInt(y);
    //        $("#totalCharges").html(z);
    //        $("#totalvasCharges").html(z);
    //    }
    //    else {
    //        var z = parseInt(y) - parseInt(x);
    //        $("#totalCharges").html(z);
    //        $("#totalvasCharges").html(z);
    //        $('#VAS' + n.id).prop('checked', false);
    //        $('#VAS' + n.id).prop('disabled', false);
    //    }
    //}



    function getVASRow(n) {

        var appNo = document.getElementById('applicantsCount').value;
        var row = n.parentNode.parentNode;
        var cols = row.getElementsByTagName("td");
        var x = cols[1].textContent;
        var amntlen = x.length;
        x = x.substring(0, parseInt(amntlen) - 4);
        var y = $("#totalCharges").html();
        var totamntlen = y.length;
        y = y.substring(0, parseInt(totamntlen) - 4);
        var rowtotId = cols[parseInt(2) + parseInt(appNo)].attributes.id.value;
        var rowtot = $("#" + rowtotId).html();

        const chkId = n.id.substring(3);
        const totrow = rowtotId.substring(3);

        const check = document.querySelector("#" + n.id);
        var isPayable = check.dataset.ispayable;

        if (n.checked) {
            $('#' + chkId).prop('checked', true);
            if (isPayable == "False") {

            } else {
                var z = parseInt(x) + parseInt(y);
                $("#totalCharges").html(z +' MAD');
                $("#totalvasCharges").html(z + ' MAD');

                if (rowtot == '') {
                    $("#" + rowtotId).html(x + ' MAD');
                    $("#" + totrow).html(x + ' MAD');
                } else {
                    $("#" + rowtotId).html(parseInt(x) + parseInt(rowtot) + ' MAD');
                    $("#" + totrow).html(parseInt(x) + parseInt(rowtot) + ' MAD');
                }
            }

        }
        else {
            $('#' + chkId).prop('checked', false);
            if (isPayable == "False") {

            }
            else {
                var z = parseInt(y) - parseInt(x);
                $("#totalCharges").html(z + ' MAD');
                $("#totalvasCharges").html(z + ' MAD');

                if (rowtot == '') {
                    $("#" + rowtotId).html("");
                    $("#" + totrow).html("");
                } else {
                    $("#" + rowtotId).html(parseInt(rowtot) - parseInt(x) + ' MAD');
                    $("#" + totrow).html(parseInt(rowtot) - parseInt(x) + ' MAD');
                }
            }

        }
    }

    function closeModal() {
        $('#vasModal').modal('toggle');
    }


    var gId, gTableId, gAmount, gAssigneeUserId;


    function OnPayment(id, amount) {

        ShowLoader($('#container'));
        var returnUrl = "/MAR/BLSAppointment/AppointmentReceipt";
        var amn = $("#totalCharges").html();
        var apId = $("#Id").val();
        window.location.href = "/MAR/BLSAppointment/CmiOnlinePayment?appointmentId="+apId+"&returnUrl="+returnUrl;
       // $.ajax({
         //   type: "POST",
           // url: "/BLSAppointment/TestOnlinePayment",
            //data: { 'amount': amn, 'appointmentId': apId,'returnUrl': returnUrl },
            //success: function (res) {

            //    if (res.success) {
            //        if (res.requestURL === null || res.requestURL === '' || res.requestURL === undefined) {
            //            HideLoader($('#container'));
            //            alert('Payment gateway not found');
            //            return false;
            //        }
            //        else {
            //            window.top.location.href = res.requestURL;
            //        }
            //    } else {
            //        ShowNotification(res.error, "error");
            //        HideLoader($('#container'));
            //    }
            //},
            //dataType: "json",
     //   });
    }

    function setStatus(status){
        $("#SaveState").val(status);
    }


  
