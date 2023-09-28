import React, { useEffect, useState } from 'react';
import './tic_tac.css';

function Tic_tac() {
  const [c, setc] = useState(0)
  const [checkbx1, setcheckbx1] = useState(true)
  const [checkbx2, setcheckbx2] = useState(true)
  const [checkbx3, setcheckbx3] = useState(true)
  const [checkbx4, setcheckbx4] = useState(true)
  const [checkbx5, setcheckbx5] = useState(true)
  const [checkbx6, setcheckbx6] = useState(true)
  const [checkbx7, setcheckbx7] = useState(true)
  const [checkbx8, setcheckbx8] = useState(true)
  const [checkbx9, setcheckbx9] = useState(true)

  const [bval1, setbval1] = useState('')
  const [bval2, setbval2] = useState('')
  const [bval3, setbval3] = useState('')
  const [bval4, setbval4] = useState('')
  const [bval5, setbval5] = useState('')
  const [bval6, setbval6] = useState('')
  const [bval7, setbval7] = useState('')
  const [bval8, setbval8] = useState('')
  const [bval9, setbval9] = useState('')

  const arr = ['X', '0', 'X', '0', 'X', '0', 'X', '0', 'X'];
  const Clear_Function =() => {
    setcheckbx1(false)
    setcheckbx1(false)
    setcheckbx1(false)
    setcheckbx1(false)
    setcheckbx1(false)
    setcheckbx1(false)
    setcheckbx1(false)
    setcheckbx1(false)
    setcheckbx1(false)
    
    setbval1('')
    setbval2('')
    setbval3('')
    setbval4('')
    setbval5('')
    setbval6('')
    setbval7('')
    setbval8('')
    setbval9('')

  }

  useEffect(() => {
    if((bval1 === '0') && (bval2 === '0') && (bval3 === '0') || ((bval1 === 'X') && (bval2 === 'X') && (bval3 === 'X'))) {
      alert(`winner ${bval1}`)
      Clear_Function()
    }
    else if((bval4 === '0') && (bval5 === '0') && (bval6 === '0') || ((bval4 === 'X') && (bval5 === 'X') && (bval6 === 'X'))) {
      alert(`winner ${bval4}`)
      Clear_Function()
    }
    else if((bval7 === '0') && (bval8 === '0') && (bval9 === '0') || ((bval4 === 'X') && (bval5 === 'X') && (bval6 === 'X'))) {
      alert(`winner ${bval7}`)
      Clear_Function()
    }

    else if((bval1 === '0') && (bval4 === '0') && (bval7 === '0') || ((bval1 === 'X') && (bval4 === 'X') && (bval7 === 'X'))) {
      alert(`winner ${bval1}`)
      Clear_Function()
    }
    else if((bval2 === '0') && (bval5 === '0') && (bval8 === '0') || ((bval2 === 'X') && (bval5 === 'X') && (bval8 === 'X'))) {
      alert(`winner ${bval2}`)
      Clear_Function()
    }
    else if((bval3 === '0') && (bval6 === '0') && (bval9 === '0') || ((bval2 === 'X') && (bval5 === 'X') && (bval8 === 'X'))) {
      alert(`winner ${bval3}`)
      Clear_Function()
    }
    else if((bval1 === '0') && (bval5 === '0') && (bval9 === '0') || ((bval1 === 'X') && (bval5 === 'X') && (bval9 === 'X'))) {
      alert(`winner ${bval1}`)
      Clear_Function()
    }
    else if((bval3 === '0') && (bval5 === '0') && (bval9 === '0') || ((bval3 === 'X') && (bval5 === 'X') && (bval9 === 'X'))) {
      alert(`winner ${bval3}`)
      Clear_Function()
    }
    else if(bval1 !='' && bval2 !='' && bval3 !='' && bval4 !='' && bval5 !='' && bval6 !='' && bval7 !='' && bval8 !='' && bval9 !='' ){
      alert(`Match Draw`)
      Clear_Function()
    }


  })

  let box1 = () => {
    if (checkbx1) {
      setbval1(arr[c])
      if (c == 9) {
        setc(0)
      } else {
        setc(c + 1)
      }
    }
    setcheckbx1(false)
  }
  let box2 = () => {
    if (checkbx2) {
      setbval2(arr[c])
      if (c == 9) {
        setc(0)
      } else {
        setc(c + 1)
      }
    }
    setcheckbx2(false)
  }
  let box3 = () => {
    if (checkbx3) {
      setbval3(arr[c])
      if (c == 9) {
        setc(0)
      } else {
        setc(c + 1)
      }
    }
    setcheckbx3(false)
  }
  let box4 = () => {
    if (checkbx4) {
      setbval4(arr[c])
      if (c == 9) {
        setc(0)
      } else {
        setc(c + 1)
      }
    }
    setcheckbx4(false)
  }
  let box5 = () => {
    if (checkbx5) {
      setbval5(arr[c])
      if (c == 9) {
        setc(0)
      } else {
        setc(c + 1)
      }
    }
    setcheckbx5(false)
  }
  let box6 = () => {
    if (checkbx6) {
      setbval6(arr[c])
      if (c == 9) {
        setc(0)
      } else {
        setc(c + 1)
      }
    }
    setcheckbx6(false)
  }
  let box7 = () => {
    if (checkbx7) {
      setbval7(arr[c])
      if (c == 9) {
        setc(0)
      } else {
        setc(c + 1)
      }
    }
    setcheckbx7(false)
  }
  let box8 = () => {
    if (checkbx8) {
      setbval8(arr[c])
      if (c == 9) {
        setc(0)
      } else {
        setc(c + 1)
      }
    }
    setcheckbx8(false)
  }
  let box9 = () => {
    if (checkbx9) {
      setbval9(arr[c])
      if (c == 9) {
        setc(0)
      } else {
        setc(c + 1)
      }
    }
    setcheckbx9(false)
  }



  return (
    <div>
      <div className='container'>
        <div className='row inner_box'>
          <div onClick={() => {
            box1()
          }} className='col-sm-4 box'>{bval1}</div>
          <div onClick={() => {
            box2()
          }} className='col-sm-4 box'>{bval2}</div>
          <div onClick={() => {
            box3()
          }} className='col-sm-4 box'>{bval3}</div>
          <div onClick={() => {
            box4()
          }} className='col-sm-4 box'>{bval4}</div>
          <div onClick={() => {
            box5()
          }} className='col-sm-4 box'>{bval5}</div>
          <div onClick={() => {
            box6()
          }} className='col-sm-4 box'>{bval6}</div>
          <div onClick={() => {
            box7()
          }} className='col-sm-4 box'>{bval7}</div>
          <div onClick={() => {
            box8()
          }} className='col-sm-4 box'>{bval8}</div>
          <div onClick={() => {
            box9()
          }} className='col-sm-4 box'>{bval9}</div>
        </div>
      </div>

    </div>
  )

}

export default Tic_tac;