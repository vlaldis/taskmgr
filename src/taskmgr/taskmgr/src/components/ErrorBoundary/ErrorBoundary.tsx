import React, { ErrorInfo, ReactElement } from "react";

interface ErrorBoundaryState {
    hasError: boolean
    errorMessage: string
}

interface ErrorboundaryProps {
    children: ReactElement
}

export class ErrorBoundary extends React.Component<ErrorboundaryProps, ErrorBoundaryState>{
    constructor(props: ErrorboundaryProps) {
        super(props)
        this.state = {
            hasError: false,
            errorMessage: ""
        }
    }
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({ hasError: true })
        this.setState({ errorMessage: error.message })
        //log or whatever
    }

    render(): React.ReactNode {
        if (this.state?.hasError) {
            return (
                <div>
                    <h3>ErrorBoundaries</h3>
                    {this.state.errorMessage}
                </div>
            )
        }
        return (this.props.children)
    }
}