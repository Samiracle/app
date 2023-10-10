

        const storedTheme = localStorage.getItem('theme')

        const getPreferredTheme = () => {
            if (storedTheme) {
                return storedTheme
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        }

        const setTheme = function (theme) {
            if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.setAttribute('data-bs-theme', 'dark')
            } else {
                document.documentElement.setAttribute('data-bs-theme', theme)
            }
        }

        setTheme(getPreferredTheme())

        window.addEventListener('DOMContentLoaded', () => {
            var el = document.querySelector('.theme-icon-active');
            if (el != 'undefined' && el != null) {
                const showActiveTheme = theme => {
                    const activeThemeIcon = document.querySelector('.theme-icon-active use')
                    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
                    const svgOfActiveBtn = btnToActive.querySelector('.mode-switch use').getAttribute('href')

                    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
                        element.classList.remove('active')
                    })

                    btnToActive.classList.add('active')
                    activeThemeIcon.setAttribute('href', svgOfActiveBtn)
                }

                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
                    if (storedTheme !== 'light' || storedTheme !== 'dark') {
                        setTheme(getPreferredTheme())
                    }
                })

                showActiveTheme(getPreferredTheme())

                document.querySelectorAll('[data-bs-theme-value]')
                    .forEach(toggle => {
                        toggle.addEventListener('click', () => {
                            const theme = toggle.getAttribute('data-bs-theme-value')
                            localStorage.setItem('theme', theme)
                            setTheme(theme)
                            showActiveTheme(theme)
                        })
                    })

            }
        })
    var locationData =[{"Id":"8457a52e-98be-4860-88fc-2ce11b80a75e","Name":"Oran","Code":"ORAN"},{"Id":"0566245a-7ba1-4b5a-b03b-3dd33e051f46","Name":"Algiers","Code":"ALGIERS"}];
    var AppointmentCategoryIdData =[{"Id":"5c2e8e01-796d-4347-95ae-0c95a9177b26","Name":"Normal","Code":"CATEGORY_NORMAL"},{"Id":"37ba2fe4-4551-4c7d-be6e-5214617295a9","Name":"Premium","Code":"CATEGORY_PREMIUM"},{"Id":"15044668-9bb4-477d-918b-4809370190b9","Name":"Prime Time","Code":"PRIME_TIME"}];
      var visaIdData =[{"Id":"c805c157-7e8f-4932-89cf-d7ab69e1af96","Name":"Schengen visa","VisaTypeCode":"SCHENGEN_VISA"},{"Id":"ec08e478-17f2-4516-914c-4d9198fd8d1e","Name":"National Visa","VisaTypeCode":"NATIONAL_VISA"}];
    var baseurl = 'https://algeriaapi.blsvisaapp.com/';
     var visasubIdData =[{"Id":"b563f6e3-58c2-48c4-ab37-a00145bfce7c","Name":"Schengen Visa","Value":"c805c157-7e8f-4932-89cf-d7ab69e1af96"},{"Id":"4d774535-d05b-46bf-83bd-6b98d6d4fd2f","Name":"Researcher visa","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"e3a2e1b1-378e-4f6e-9adb-eacaec8d8ba8","Name":"Internship visa","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"eeb83923-5c8d-4458-9415-64451348c7dc","Name":"Family Reunification Visa","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"43a911df-f7f7-48f8-8dd8-59c65dce32b8","Name":"Residence and Employment Work Visa","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"14e132e5-2f0a-40e1-833f-d0c862eb1899","Name":"Student Visa","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"aaff0199-6d71-4d97-ad45-908819db7fc3","Name":"Residence visa with working permit exemption","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"81ed5eb4-9b81-45b4-8df3-ad090286a619","Name":"Self-employed work visa","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"4757ce76-bc0b-4839-9af4-d9ea54363072","Name":"Investor visa","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"abdf02d9-80ae-4be9-b9f9-5d9e459c76a9","Name":"Entrepreneur visa","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"5205d0b9-0bae-42f2-aaf4-d441cdcdd7bb","Name":"Long-term residence visa","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"a2a5a09e-2a43-4d77-9b85-fdbc9920382d","Name":"Long-term residence or EU Long-term residence recover","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"dde5a936-4903-4965-b68c-da1383a13a70","Name":"Visa for highly qualified workers and for intra-company transfers","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"12f0c61f-a1c1-4ce5-a838-1a5e80952f07","Name":"Non-working residency visa (non-lucrative visa)","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"01cc8c56-965d-4909-9b20-7c8975d15ae3","Name":"Study between 90 and 179 days","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"f1ef3058-8f67-4192-8694-63cb4cb756c3","Name":"Visa for highly qualified workers and for intra-company transfers","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"6bad3e0d-26a1-4df7-9793-3d4bae1c3a31","Name":"Non-lucrative residence visa","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"7c3292a8-dd3b-470d-a925-9ebbcaacb99f","Name":"Highly qualified Work Visa","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"6ecaa347-12ac-4517-b713-1e5f7fe41441","Name":"Internship visa","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"217cf6be-5c74-4ba1-b86f-ecac7fe84cbc","Name":"Investment Visa","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"ecad47ba-e511-43c3-bfd9-39374aa21608","Name":"Investor visa","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"6b61b5eb-d36b-4282-89e3-65cb3536c7d7","Name":"Entrepreneur visa","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"7750347f-caf2-4e92-9417-5c278ad6922e","Name":"Family Reunification Visa","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"44a47a9b-5ed1-4818-a9e0-88e07f06e82b","Name":"National Visa","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"0e9f53e2-a31d-4f8b-9bff-a559432deee3","Name":"Relocation With In The Same Company","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"978d6747-8551-4d02-84af-e7dfb085352d","Name":"Study Family Member ","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"c2b991d2-d7f8-4bf4-894c-97aabcb72c2d","Name":"Internship Program Visa","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"d5d1bb84-b6e9-43d9-870c-ccff8c36bda5","Name":"Study More Than 180 Days","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"18ab57b1-36f3-4cd5-9c40-f6343597adba","Name":"Study Less Than 90 Days","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"a782b7d4-0dfe-4069-9c8f-321d1bc83546","Name":"Select Visit Purpose","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"1ba7ae6c-3fa9-4ed5-93c8-d4c34d64a623","Name":"Work Visa( employee working for somebody else)","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"474d545e-f2c0-4f72-a8b0-23b1d9843002","Name":"Long-term residence permit recuperation visa","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"d8d56909-c94f-4893-9e7b-34a07aa629ce","Name":"EU National Family Member Visa","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"},{"Id":"60e9bb55-8eaf-470d-afe1-44004e4d5655","Name":"Residence visa with working permit exemption","Value":"ec08e478-17f2-4516-914c-4d9198fd8d1e"}];
     var missionData =[{"Id":"bc733646-1ee1-4e12-857e-95ad0c3acee7","Name":"Test","Code":"TEST"},{"Id":"7b831dab-5bed-4f9e-9e13-a301dfce2d77","Name":"Consulate - Oran","Code":"CONSULATE_ORAN"},{"Id":"ec336bcf-29fe-4d76-90f1-a7ae2d74d78b","Name":"Consulate - Algiers","Code":"CONSULATE_ALGIERS"}];

    var familyModalClose = false;
    var livenessDeclarationModalClose = false;
    var userConsentModalClose = false;
    $(document).ready(function () {


        $("#AppointmentCategoryId").kendoDropDownList({
         
            dataTextField: "Name",
            dataValueField: "Id",
            filter: "contains",
            autoBind: true,
           
            value:"5c2e8e01-796d-4347-95ae-0c95a9177b26",
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
            value:'0566245a-7ba1-4b5a-b03b-3dd33e051f46',
          
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
            value:'b563f6e3-58c2-48c4-ab37-a00145bfce7c',
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
                { Name: "7 Members", Value: "7" },
                { Name: "8 Members", Value: "8" },
            ]
        });

        const fileInput = document.getElementById('uploadfile-1');

        fileInput.onchange = () => {
            ShowLoader();
            const selectedFiles = [...fileInput.files];
            var fd = new FormData();
            var files = selectedFiles;

         
            if (files.length > 0) {
                fd.append('file', files[0]);
            }

            $.ajax({
                url: "/DZA/query/UploadProfileImage",
               
                type: 'post',
                data: fd,
                contentType: false,
                processData: false,
                success: function (result) {
                    HideLoader();

                    if (result.success) {
                        $("#uploadfile-1-preview").attr("src", "/DZA/query/getfile?fileid=" + result.fileId);
                        $("#ApplicantPhotoId").val(result.fileId);
                        $('#photoUploadModal').modal('show');
                    }
                     else{
                        alert(result.err);
                    }
                }
            });
        }

        if('Family'=='Family'){
            $("#members").show();
           var appointmentFor = document.getElementById("family");
            appointmentFor.checked = true;
             $("#ApplicantsNo").data('kendoDropDownList').value("2");
        }

        var evc=document.getElementById("EmailVerificationCode");
         evc.onpaste = e => e.preventDefault();
        evc.oncopy = e => e.preventDefault();
        $("#AppointmentDate3").on("keydown", function (e) {
            e.preventDefault();
        });
        $("#AppointmentDate3").on("click", function (e) {
            $("#AppointmentDate3").data("kendoDatePicker").open();
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
        if (id !=='AppointmentSlot3') {
            values = values + $("#AppointmentSlot3").data("kendoDropDownList").value();
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
                url: "/DZA/BLSAppointment/TotalFeeUpdate",
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
        window.location.href = "/DZA/home/index";
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

        var ad = $("#AppointmentDate3").data("kendoDatePicker").value();
        var slot = $("#AppointmentSlot3").data("kendoDropDownList");
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
            url: "/DZA/blsappointment/GetAvailableSlotsByDate?appointmentDate=" + appointmentDate + "&locationId=" + locationId + "&categoryId=" + categoryId + "&visaType=" + visaType + "&visaSubType=" + visasubType + "&applicantCount=" + applicantCount + "&dataSource=" + ds + "&missionId=" + mid,
            dataType: "json",
            success: function (data) {
                HideLoader();
                slotDataSource = data;
                slot.enable(true);
            }
        });
    }

   

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
            url: "/DZA/blsappointment/SendAppointmentVerificationCode?code=%2bLMdKq1t7jeRjG8mgzSretvXLvZcXYTQLif3qZLGqtXMOnwOD35Mrz%2fYAt%2b1ZRODsUqm3AAowt5fWSANuS9zKjZAM8P9uPSW64QfTHx5nZnLZSR14Moixr3fnRwm8kdZ",
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
                        window.location.href = "/DZA/blsappointment/manageappointment";
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
        var url = '/DZA/blsappointment/livenessdetection?appointmentId=' + appointmentId + '&applicantPhotoId=' + img;
        OpenPopup(url, { Title: "Verify Applicant", Width: 800, Height: 650 });
        return false;
    }

    function OnApplicantVerified(prm) {
        if (prm.session) {
            $("#btnVerifyApplicant").hide();
            window.location.href = "/DZA/blsappointment/manageappointment";
            return false;
        }
        if (prm.redircet) {
            $("#btnVerifyApplicant").hide();
            window.location.href = "/DZA/blsappointment/manageappointment";
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
            Value: '&#x2B;LMdKq1t7jeRjG8mgzSretvXLvZcXYTQLif3qZLGqtXMOnwOD35Mrz/YAt&#x2B;1ZRODsUqm3AAowt5fWSANuS9zKjZAM8P9uPSW64QfTHx5nZnLZSR14Moixr3fnRwm8kdZ',
            Id:  $('#Id').val()
        }
            $.ajax({
            type: "POST",
            url: "/DZA/blsappointment/VerifyEmail",
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
        win.iframeOpenUrl = '/DZA/CaptchaPublic/GenerateCaptcha?data=Ve5S%2fmrOcWrebC6O1a1%2bATJQeqxEmNylAHWCYO%2bg%2fCLgW5zISXWH5s%2fxVvEtVKLO0PB5GPfHR%2b1mo896pK1HBuwko49m1B8IVbmDFICe404%3d';
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
        if ($("#AppointmentDate3").val() == '') {
            ShowError('Please select appointment date');
            return false;
        }

        var ad = kendo.toString($("#AppointmentDate3").data("kendoDatePicker").value(), 'yyyy-MM-dd');
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
        if ($("#AppointmentSlot3").val() == '') {
            ShowError('Please select appointment slot');
            return false;
        }
        var applicantsCount = $("#ApplicantsNo").val();
        if (applicantsCount == '' || applicantsCount == null) {
            $("#ApplicantsNo").val(1);
            applicantsCount = 1;
        }

      
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
       
    }

    var onAjaxSuccess = function (res) {
        if (res.success) {
            HideLoader();
            $("#appointmentDetailsDiv").hide();
            $("#termsDiv").show();
            $("#applicantDetailsDivForm").load('/DZA/BlsAppointment/VisaAppointmentForm?appointmentId=' + res.model.Id);
            setStatus(res.model.SaveState);
            BackToTop();
        }
        else {
            if (res.bot === true) {
                window.location.href = "/DZA/account/bot";
                return false;
            }
            if (res.userverify === true) {
                alert(res.error);
                window.location.href = "/DZA/account/UserVerification?userId=" + res.uid;
                return false;
            }
            HideLoader();
            ShowError(res.error);
            if (res.refreshSlot === true) {
                LoadAppointmentDates('3','3');
            }
        }
    };





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
                $("#totalCharges").html(z +' DZD');
                $("#totalvasCharges").html(z + ' DZD');

                if (rowtot == '') {
                    $("#" + rowtotId).html(x + ' DZD');
                    $("#" + totrow).html(x + ' DZD');
                } else {
                    $("#" + rowtotId).html(parseInt(x) + parseInt(rowtot) + ' DZD');
                    $("#" + totrow).html(parseInt(x) + parseInt(rowtot) + ' DZD');
                }
            }

        }
        else {
            $('#' + chkId).prop('checked', false);
            if (isPayable == "False") {

            }
            else {
                var z = parseInt(y) - parseInt(x);
                $("#totalCharges").html(z + ' DZD');
                $("#totalvasCharges").html(z + ' DZD');

                if (rowtot == '') {
                    $("#" + rowtotId).html("");
                    $("#" + totrow).html("");
                } else {
                    $("#" + rowtotId).html(parseInt(rowtot) - parseInt(x) + ' DZD');
                    $("#" + totrow).html(parseInt(rowtot) - parseInt(x) + ' DZD');
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
        var returnUrl = "/DZA/BLSAppointment/AppointmentReceipt";
        var amn = $("#totalCharges").html();
        var apId = $("#Id").val();
        window.location.href = "/DZA/BLSAppointment/CmiOnlinePayment?appointmentId="+apId+"&returnUrl="+returnUrl;
       
    }

    function setStatus(status){
        $("#SaveState").val(status);
    }
