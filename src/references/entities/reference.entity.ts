import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { ObjectId } from "mongoose"

@Schema()
export class Reference {
    @Prop()
    displayName: string
    @Prop()
    description: string
    @Prop()
    data:ReferenceEntry[]
}

export class ReferenceEntry{
    @Prop()
    key: string
    @Prop()
    value: string
}

export const ReferenceSchema =  SchemaFactory.createForClass(Reference)
