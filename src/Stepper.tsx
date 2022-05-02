import React, { useEffect, useState } from 'react';
import css from './Stepper.module.css'

export interface StepperProps {
    currentStep: number,
    steps: Array<React.ReactElement | React.ReactNode>
}

type GetContainerStyle = (currentStep: number, containerPosition: number) => React.CSSProperties

export default function Stepper(props: StepperProps) {
    const { currentStep, steps } = props
    const [allowOverflow, setAllowOverflow] = useState(false)

    const getContainerStyle: GetContainerStyle = (currentStep, containerPosition) => {
        if (containerPosition === currentStep) {
            return {
                transform: 'none',
                visibility: 'visible',
                height: 'auto'
            }
        } else if (containerPosition > currentStep) {
            return {
                transform: 'translate3d(100%, 0, 0)',
                visibility: 'hidden',
                height: 0
            }
        } else {
            return {
                transform: 'translate3d(-100%, 0, 0)',
                visibility: 'hidden',
                height: 0
            }
        }
    }

    useEffect(() => {
        setAllowOverflow(false)
        const timeout = setTimeout(() => {
            setAllowOverflow(true)
        }, 300)

        return () => {
            clearTimeout(timeout)
        }
    }, [currentStep])

    return (
        <div className={`${css.stepsContainer} ${allowOverflow ? css.overflow : ''}`}>
            {steps.map((step, index) => (
                <div
                    className={css.step}
                    style={getContainerStyle(currentStep, index + 1)}
                    key={index}
                >
                    {index + 1 === currentStep ? step : null}
                </div>
            ))}
        </div>
    )
}
