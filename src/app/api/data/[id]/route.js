import { NextResponse } from "next/server"

export async function DELETE(Request, {params}) {
  
  const { id } = params /// извлекаем id из params
  return NextResponse.json({id})
}

//Параметры (params) - это данные, которые передаются в маршрут при его обработке. [id] = params