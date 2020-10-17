import { IStyle, ITheme } from "office-ui-fabric-react/lib/Styling";
import { IStyleFunctionOrObject } from "office-ui-fabric-react/lib/Utilities";

export interface ITermItemSuggestionProps extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * Optional class for the root TaxonomyPicker element
	 */
	className?: string;

	/**
	 * Call to apply custom styling on the TaxonomyPicker element
	 */
	styles?: IStyleFunctionOrObject<ITermItemSuggestionStyleProps, ITermItemSuggestionStyles>;

	/**
	 * Theme provided by High-Order Component
	 */
	theme?: ITheme;
}

export type ITermItemSuggestionStyleProps = Required<Pick<ITermItemSuggestionProps, "theme">> &
	Pick<ITermItemSuggestionProps, "className"> & {};

export interface ITermItemSuggestionStyles {
	/**
	 * Refers to the text element of the TermItemSuggestion
	 */
	suggestionTextOverflow?: IStyle;
}