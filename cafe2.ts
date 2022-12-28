// 3. ร้านอินเตอร์เน็ตคาเฟเร้านหนึ่งคิดค่าใช้บริการ 15 บาทต่อชั่วโมง ทางร้านต้องการดึงดูดลูกค้าที่ใช้อินเตอร์เน็ตหรือ
// เล่นเกมส์มาก จึงมีระบบสมาชิกร้านซูึ่งผู้สมัครสมาชิกจะเสียค่าสมาชิก 100 บาทต่อเดือนและจะได้ส่วนลด 10% จาก
// ค่าบริการ จงคำานวณค่าใช้จ่ายทั้งหมดต่อเดือนระหว่างผู้ใช้บริการ A และ B โดยที่ทั้ง A และ B ต่างก็ใช้บริการ 50 
// ชั่วโมงต่อเดือนที่ร้านทั้งคู่ โดยที่ A ไม่เป็นสมาชิก และ B เป็นสมาชิก (ค่าใช้จ่ายทั้งหมดของ B ต้องรวมค่าสมาชิกด้วย) 
// และสรุปว่าใครเสียค่าใช้จ่ายมากกว่ากัน

function main() : void {
    var time : number = 50
    var bathperhour : number = 15
    var a : number = 0
    var b : number = 0
    const result = cal(time, bathperhour, a, b)
    console.log(`a = ${result[0]} b = ${result[1]}`)
}

function cal(time : number, bathperhour : number, a : number, b : number) : any {
    var a = (time * bathperhour)
    var b = ((10 * (time * bathperhour)) / 100) + 100
    var arr = [a, b]
    cal2(a, b)
    return arr
}

function cal2 (a : number, b: number) : void {
    var finalresult = a - b
    console.log(`a จ่ายมากกว่า b ${finalresult}บาท`)
    
}

main()
