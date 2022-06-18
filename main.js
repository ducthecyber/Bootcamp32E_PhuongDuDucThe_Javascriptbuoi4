//Bài tập 1: Sắp xếp 3 số nguyên theo thứ tự tăng dần
document.getElementById("btnSapXep").onclick = function () {
    //input: sothu1:number, sothu2:number, sothu3:number    
    var sothu1 = Number(document.getElementById("So1").value);
    var sothu2 = Number(document.getElementById("So2").value);
    var sothu3 = Number(document.getElementById("So3").value);
    //output: ketQua: string
    var ketQua = "";
    //progress
    if (sothu1 > sothu2 && sothu2 > sothu3) {
        ketQua = sothu3 + " < " + sothu2 + " < " + sothu1;
    }
    else if (sothu1 > sothu2 && sothu3 > sothu2) {
        ketQua = sothu2 + " < " + sothu3 + " < " + sothu1;
    }
    else if (sothu1 > sothu2 && sothu3 > sothu1) {
        ketQua = sothu1 + " < " + sothu2 + " < " + sothu3;
    }
    else if (sothu2 > sothu1 && sothu1 > sothu3) {
        ketQua = sothu3 + " < " + sothu1 + " < " + sothu2;
    }
    else if (sothu2 > sothu3 && sothu3 > sothu1) {
        ketQua = sothu1 + " < " + sothu3 + " < " + sothu2;
    }
    else {
        ketQua = sothu1 + " < " + sothu2 + " < " + sothu3;
    }
    //In ket qua ra giao dien
    document.getElementById("KquaB1").innerHTML = ketQua;
}

//Bài tập 2: Chào hỏi thành viên 
document.getElementById("btnChaoHoi").onclick = function () {
    //input: string : option"", option B, option M, option A, option E
    var thanhVien = document.getElementById("thanhVien").value;
    //output: string : Xin chao "thanhVien"
    var ketQua2 = "";
    //progress
    if (thanhVien == "B") {
        ketQua2 = "Bố";
    }
    else if (thanhVien == "M") {
        ketQua2 = "Mẹ";
    }
    else if (thanhVien == "A") {
        ketQua2 = "Anh Trai";
    }
    else if (thanhVien == "E") {
        ketQua2 = "Em Gái";
    }
    else {
        ketQua2 = "người lại ơi!";
    }
    //In kết quả ra giao diện
    document.getElementById("ketQuaB2").innerHTML = "Xin chào " + ketQua2;
}

//Bài 3: Đếm số chẵn lẻ
document.getElementById("btnDem").onclick = function () {
    //input: number: so1, so2, so3
    var so1 = Number(document.getElementById("so1").value);
    var so2 = Number(document.getElementById("so2").value);
    var so3 = Number(document.getElementById("so3").value);
    //output: counter_le: number, counter_chan:number
    var counter_le = 0;
    var counter_chan = 0;
    //progress
    if (so1 % 2 == 0 && so2 % 2 == 0 & so3 % 2 == 0) {
        counter_chan = counter_chan + 3;
    }
    else if (so1 % 2 == 0 && so2 % 2 == 0) {
        counter_chan = counter_chan + 2;
        counter_le = 3 - counter_chan;
    }
    else if (so1 % 2 == 0 && so3 % 2 == 0) {
        counter_chan = counter_chan + 2;
        counter_le = 3 - counter_chan;
    }
    else if (so1 % 2 == 0 && so3 % 2 == 0) {
        counter_chan = counter_chan + 2;
        counter_le = 3 - counter_chan;
    }
    else if (so1 % 2 == 0) {
        counter_chan += 1;
        counter_le = 3 - counter_chan;
    }
    else if (so2 % 2 == 0) {
        counter_chan += 1;
        counter_le = 3 - counter_chan;
    }
    else if (so3 % 2 == 0) {
        counter_chan += 1;
        counter_le = 3 - counter_chan;
    }
    else {
        counter_chan = 0;
        counter_le = 3 - counter_chan;
    }
    document.getElementById("ketQuaB3").innerHTML = "Có " + counter_chan + " số chẵn và " + counter_le + " số lẻ";
}
//Bài tập 4: Đoán hình tam giác

document.getElementById("btnDuDoan").onclick = function () {
    //input: number: canh1, canh2, canh3
    var a = Number(document.getElementById("canh1").value);
    var b = Number(document.getElementById("canh2").value);
    var c = Number(document.getElementById("canh3").value);
    //output: string: tamGiacDeu, tamGiacCan, tamGiacVuong, tamGiacKhac
    var ketQuaB4 = "";
    //progress
    if (a <= 0 || b <= 0 || c <= 0) {
        ketQuaB4 = "này không phải tam giác";
    }
    else if (a == b && b == c) {
        ketQuaB4 = "Tam Giác Đều";
    }
    else if (a == b || a == c || b == c) {
        ketQuaB4 = "Tam Giác Cân";
    }
    else if ((Math.pow(c, 2) == Math.pow(a, 2) + Math.pow(b, 2))
        || (Math.pow(b, 2) == Math.pow(a, 2) + Math.pow(c, 2))
        || (Math.pow(a, 2) == Math.pow(b, 2) + Math.pow(c, 2))
    ) {
        ketQuaB4 = "Tam Giác Vuông";
    }
    else {
        ketQuaB4 = "Tam Giác Khác"
    }
    document.getElementById("ketQuaB4").innerHTML = "Hình " + ketQuaB4;
}

//Bài tập 5: Tính ngày tháng năm

document.getElementById("btnYesterday").onclick = function () {
    //input: today: string
    var today = document.getElementById("date").value;
    var d = new Date(today);
    // const thang = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // var month = thang[d.getMonth()];
    // var month = thang[d.getMonth()]; ra chữ June
    // var month = d.getMonth()+1; ra số 6
    //output: nextDay: string
    var yesterday = d;
    //progress
    yesterday.setDate(d.getDate() - 1);
    var newday = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    //in ket qua
    if (today == "") {
        document.getElementById("ketQuaB5").innerHTML = "Bạn nhập ngày vào nhé !";
    }
    else {
        document.getElementById("ketQuaB5").innerHTML = newday + " / " + month + " / " + year;
    }

}
document.getElementById("btnTomorrow").onclick = function () {
    //input: today: string
    var today = document.getElementById("date").value;
    var d = new Date(today);
    // const thang = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // var month = thang[d.getMonth()];
    // var month = thang[d.getMonth()]; ra chữ June
    // var month = d.getMonth()+1; ra số 6
    //output: nextDay: string
    var tomorrow = d;
    //progress
    tomorrow.setDate(d.getDate() + 1);
    var newday = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    //in ket qua
    if (today == "") {
        document.getElementById("ketQuaB5").innerHTML = "Bạn nhập ngày vào nhé !";
    }
    else {
        document.getElementById("ketQuaB5").innerHTML = newday + " / " + month + " / " + year;
    }
}

//Bài tập 6: Tính tổng số ngày của tháng nhập vào

document.getElementById("btnTinhNgay").onclick = function () {
    //input: monthB6: number; yearB6: number;
    var monthB6 = Number(document.getElementById("month_B6").value);
    var yearB6 = Number(document.getElementById("year_B6").value);
    //output: tongNgay: number
    var soNgay = 0;
    var soThang = "";
    //progress
    switch (monthB6) {
        case 1: {
            soThang = "Tháng 1";
            soNgay = 31;
        }; break;
        case 2: {
            soThang = "Tháng 2";
            if (yearB6 % 4 == 0 && yearB6 % 100 >= 0) {
                soNgay = 29;
            }
            else { soNgay = 28; }
        }; break;
        case 3: {
            soThang = "Tháng 3";
            soNgay = 31;
        }; break;
        case 4: {
            soThang = "Tháng 4";
            soNgay = 30;
        }; break;
        case 5: {
            soThang = "Tháng 5";
            soNgay = "31";
        }; break;
        case 6: {
            soThang = "Tháng 6";
            soNgay = "30";
        }; break;
        case 7: {
            soThang = "Tháng 7";
            soNgay = "31";
        }; break;
        case 8: {
            soThang = "Tháng 8";
            soNgay = "31";
        }; break;
        case 9: {
            soThang = "Tháng 9";
            soNgay = "30";
        }; break;
        case 10: {
            soThang = "Tháng 10";
            soNgay = "31";
        }; break;
        case 11: {
            soThang = "Tháng 11";
            soNgay = "30";
        }; break;
        case 12: {
            soThang = "Tháng 12";
            soNgay = "31";
        }; break;
        default: {
            soThang = "Không xác định";
            soNgay = 0;
        }
    }
    //in kết quả ra giao diện
    document.getElementById("ketQuaB6").innerHTML = soThang + " có " + soNgay + " ngày";
}

//Bài tập 7: Đọc số

document.getElementById("btnDocSo").onclick = function () {
    //input: soB7: number (so co 3 chu so)
    var x = Number(document.getElementById("soB7").value);
    //output: ketQuaB7: string
    var docA = "";
    var docB = "";
    var docC = "";
    //progress
    //     +Tach lay hang tram => n / 100 => lam tron so Math.floor(n / 100)
    var a = Math.floor(x / 100);
    //     +Tach lay hang chuc => n % 100 / 10 =>lam tron so Math.floor( n % 100 /10)
    var b = Math.floor(x % 100 / 10);
    //     +Tach lay hang don vi => n % 10 
    var c = Math.floor(x % 10);
    switch (a) {
        case 0: {
            docA = "";
        }; break;
        case 1: {
            docA = "Một Trăm";
        }; break;
        case 2: {
            docA = "Hai Trăm";
        }; break;
        case 3: {
            docA = "Ba Trăm";
        }; break;
        case 4: {
            docA = "Bốn Trăm";
        }; break;
        case 5: {
            docA = "Năm Trăm";
        }; break;
        case 6: {
            docA = "Sáu Trăm";
        }; break;
        case 7: {
            docA = "Bảy Trăm";
        }; break;
        case 8: {
            docA = "Tám Trăm";
        }; break;
        case 9: {
            docA = "Chín Trăm";
        }; break;
        default: {
            docA = "";
        }
    }
    switch (b) {
        case 0: {
            if (c == 0) {
                docB = "";
            }
            else if (a == 0) { docB = ""; }
            else { docB = "Lẻ"; }
        }; break;

        case 1: {
            docB = "Mười";
        }; break;
        case 2: {
            docB = "Hai Mươi";
        }; break;
        case 3: {
            docB = "Ba Mươi";
        }; break;
        case 4: {
            docB = "Bốn Mươi";
        }; break;
        case 5: {
            docB = "Năm Mươi";
        }; break;
        case 6: {
            docB = "Sáu Mươi";
        }; break;
        case 7: {
            docB = "Bảy Mươi";
        }; break;
        case 8: {
            docB = "Tám Mươi";
        }; break;
        case 9: {
            docB = "Chín Mươi";
        }; break;
        default: {
            docB = "";
        }
    }
    switch (c) {
        case 1: {
            if (b >= 2) {
                docC = "Mốt";
            }
            else { docC = "Một" }

        }; break;
        case 2: {
            docC = "Hai";
        }; break;
        case 3: {
            docC = "Ba";
        }; break;
        case 4: {
            docC = "Bốn";
        }; break;
        case 5: {
            if (b == 0) {
                docC = "Năm";
            }
            else { docC = "Lăm"; }

        }; break;
        case 6: {
            docC = "Sáu";
        }; break;
        case 7: {
            docC = "Bảy";
        }; break;
        case 8: {
            docC = "Tám";
        }; break;
        case 9: {
            docC = "Chín";
        }; break;
        default: {
            docC = "";
        }
    }
    //in kết quả ra giao diện
    document.getElementById("ketQuaB7").innerHTML = docA + " " + docB + " " + docC;
}

//Bài tập 8:
document.getElementById("btnSoSanh").onclick = function () {
    //input: họ tên: nameA, nameB, nameC : String
    //input: tọa độ: cxA, cxB, cxC, cyA, cyB, cyC, cxSchool, cySchool: number
    var tenA = document.getElementById("nameA").value;
    var tenB = document.getElementById("nameB").value;
    var tenC = document.getElementById("nameC").value;
    var xdiemA = Number(document.getElementById("cxA").value);
    var ydiemA = Number(document.getElementById("cyA").value);
    var xdiemB = Number(document.getElementById("cxB").value);
    var ydiemB = Number(document.getElementById("cyB").value);
    var xdiemC = Number(document.getElementById("cxC").value);
    var ydiemC = Number(document.getElementById("cyC").value);
    var xdiemTruong = Number(document.getElementById("cxSchool").value);
    var ydiemTruong = Number(document.getElementById("cySchool").value);
    //output: ten sinh vien xa truong nhat: string
    var tenSinhVien = "";
    //progress
    //(Math.pow(c, 2): binh phuong c
    //Math.sqrt(9): can bac hai cua 9
    var dA = Math.pow(xdiemTruong - xdiemA, 2) + Math.pow(ydiemTruong - ydiemA, 2);
    var khoangCachA = Math.sqrt(dA);

    var dB = Math.pow(xdiemTruong - xdiemB, 2) + Math.pow(ydiemTruong - ydiemB, 2);
    var khoangCachB = Math.sqrt(dB);

    var dC = Math.pow(xdiemTruong - xdiemC, 2) + Math.pow(ydiemTruong - ydiemC, 2);
    var khoangCachC = Math.sqrt(dC);
    var banA = document.getElementById("nameA");
    var banB = document.getElementById("nameB");
    var banC = document.getElementById("nameC");
    if (khoangCachA > khoangCachB && khoangCachA > khoangCachC) {
        tenSinhVien = banA.value;
    }
    else if (khoangCachB > khoangCachA && khoangCachB > khoangCachC) {
        tenSinhVien = banB.value;
    }
    else if (khoangCachC > khoangCachA && khoangCachC > khoangCachB) {
        tenSinhVien = banC.value;
    }
    else if (khoangCachA == khoangCachB && khoangCachB > khoangCachC) {
        tenSinhVien = banA.value + " và " + banB.value;
    }
    else if (khoangCachA == khoangCachC && khoangCachC > khoangCachB) {
        tenSinhVien = banA.value + " và " + banC.value;
    }
    else if (khoangCachB == khoangCachC && khoangCachC > khoangCachA) {
        tenSinhVien = banB.value + " và " + banC.value;
    }
    else if (khoangCachA == khoangCachB && khoangCachB == khoangCachC) {
        tenSinhVien = banA.value + " và " + banB.value + " và " + banC.value;
    }
    else { tenSinhVien = "" }

    //in kết quả ra giao diện
    document.getElementById("ketQuaBai8").innerHTML = "Sinh viên " + tenSinhVien + " xa trường nhất";
}