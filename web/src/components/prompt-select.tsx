import { api } from '@/lib/axios';
import { useEffect, useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';


interface Prompt {
    id: string,
    title: string,
    template: string
}

interface PromptSelectedProps {
    onPromptSelected: (template: string) => void,
}


export function PromptSelect(props: PromptSelectedProps) {
    const [prompts, setPrompts] = useState<Prompt[] | null>(null)

    useEffect(() => {
        api.get('/prompts').then(response => {
            setPrompts(response.data)
        })
    }, []);


    return (
        <Select onValueChange={props.onPromptSelected}>
            <SelectTrigger>
                <SelectValue placeholder="Selecione um prompt" />
            </SelectTrigger>
            <SelectContent>
                {prompts?.map(prompt => {
                    return (
                        <SelectItem key={prompt.id} value={prompt.template}>
                            {prompt.title}
                        </SelectItem>

                    )
                })}
            </SelectContent>
        </Select>
    )
}