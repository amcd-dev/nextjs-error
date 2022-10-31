'use client';
import {useState} from "react";

export default function ClientComponent() {
    const [state, setState] = useState()
    return (
        <div>
            <h4>I am a Client rendered component</h4>
        </div>
    )
}