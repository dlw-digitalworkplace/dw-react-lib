import { ILabelProps, IRenderFunction, IStyle, IStyleFunctionOrObject, ITheme } from "@fluentui/react";
import { ITermPickerProps, ITermValue } from "../TermPicker";
import { ITaxonomyPickerDialogProps } from "./TaxonomyPickerDialog";
import { ITaxonomyProvider } from "./models";

export interface ITaxonomyPickerProps {
	allowAddingTerms?: boolean;

	allowDeprecatedTerms?: boolean;

	allowDisabledTerms?: boolean;

	/**
	 * Optional class for the root TaxonomyPicker element
	 */
	className?: string;

	errorMessage?: string | JSX.Element;

	dialogProps?: Pick<
		ITaxonomyPickerDialogProps,
		"className" | "dialogContentProps" | "labels" | "onRenderTreeItem" | "rootNodeLabel" | "showRootNode" | "styles"
	>;

	disabled?: boolean;

	itemLimit?: number;

	label?: string;

	labelProps?: Partial<ILabelProps>;

	provider: ITaxonomyProvider;

	required?: boolean;

	selectedItems: ITermValue[];

	/**
	 * Call to apply custom styling on the TaxonomyPicker element
	 */
	styles?: IStyleFunctionOrObject<ITaxonomyPickerStyleProps, ITaxonomyPickerStyles>;

	termPickerProps?: Pick<ITermPickerProps, "onRenderSuggestionsItem">;

	theme?: ITheme;

	onRenderOpenDialogButton?: IRenderFunction<ITaxonomyPickerDialogButtonProps>;

	onChange(items: ITermValue[]): void;

	/**
	 * When specified, allows to override the error message that is being set when creating a new term fails.
	 * This allows you to display a different message - or none at all - when an error is returned.
	 * @param newValue The name of the term that was being added.
	 * @param err The current error that is being thrown.
	 */
	onReceiveTermCreationFailedMessage?(newValue: string, err: string): string | JSX.Element;

	/**
	 * When specified, allows to override the success message that is being set when successfully creating a new term.
	 * This allows you to display a different message - or none at all - when a new term has been created.
	 * @param newValue The name of the term that has been added.
	 * @param message The current message that is being returned.
	 */
	onReceiveTermCreationSuccessMessage?(newValue: string, message: string): string | JSX.Element;

	onGetErrorMessage?(selectedItems: ITermValue[]): string | JSX.Element | PromiseLike<string | JSX.Element> | undefined;
}

export interface ITaxonomyPickerStyleProps {
	className?: string;
	theme: ITheme;
}

export interface ITaxonomyPickerStyles {
	root?: IStyle;
	inputWrapper?: IStyle;
	input?: IStyle;
	errorMessage?: IStyle;
	successMessage?: IStyle;
}

export interface ITaxonomyPickerDialogButtonProps {
	disabled: boolean;
	onButtonClick: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>;
}
