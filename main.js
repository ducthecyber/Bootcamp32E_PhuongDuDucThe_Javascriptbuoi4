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