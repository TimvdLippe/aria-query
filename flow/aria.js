/**
 * @flow
 */

type ARIAAbstractRole =
  'command'
  | 'composite'
  | 'input'
  | 'landmark'
  | 'range'
  | 'roletype'
  | 'section'
  | 'sectionhead'
  | 'select'
  | 'structure'
  | 'widget'
  | 'window';

type ARIAWidgetRole =
  'alert'
  | 'alertdialog'
  | 'button'
  | 'checkbox'
  | 'dialog'
  | 'gridcell'
  | 'link'
  | 'log'
  | 'marquee'
  | 'menuitem'
  | 'menuitemcheckbox'
  | 'menuitemradio'
  | 'option'
  | 'progressbar'
  | 'radio'
  | 'scrollbar'
  | 'searchbox'
  | 'slider'
  | 'spinbutton'
  | 'status'
  | 'switch'
  | 'tab'
  | 'tabpanel'
  | 'textbox'
  | 'timer'
  | 'tooltip'
  | 'treeitem';

type ARIACompositeWidgetRole =
  'combobox'
  | 'grid'
  | 'listbox'
  | 'menu'
  | 'menubar'
  | 'radiogroup'
  | 'tablist'
  | 'tree'
  | 'treegrid';

type ARIADocumentStructureRole =
  'article'
  | 'cell'
  | 'columnheader'
  | 'definition'
  | 'directory'
  | 'document'
  | 'feed'
  | 'figure'
  | 'group'
  | 'heading'
  | 'img'
  | 'list'
  | 'listitem'
  | 'math'
  | 'none'
  | 'note'
  | 'presentation'
  | 'region'
  | 'row'
  | 'rowgroup'
  | 'rowheader'
  | 'separator'
  | 'table'
  | 'term'
  | 'toolbar';

type ARIALandmarkRole =
  'application'
  | 'banner'
  | 'complementary'
  | 'contentinfo'
  | 'form'
  | 'main'
  | 'navigation'
  | 'search';

type ARIADPubRole =
  | 'doc-abstract'
  | 'doc-acknowledgments'
  | 'doc-afterword'
  | 'doc-appendix'
  | 'doc-backlink'
  | 'doc-biblioentry'
  | 'doc-bibliography'
  | 'doc-biblioref'
  | 'doc-chapter'
  | 'doc-colophon'
  | 'doc-conclusion'
  | 'doc-cover'
  | 'doc-credit'
  | 'doc-credits'
  | 'doc-dedication'
  | 'doc-endnote'
  | 'doc-endnotes'
  | 'doc-epigraph'
  | 'doc-epilogue'
  | 'doc-errata'
  | 'doc-example'
  | 'doc-footnote'
  | 'doc-foreword'
  | 'doc-glossary'
  | 'doc-glossref'
  | 'doc-index'
  | 'doc-introduction'
  | 'doc-noteref'
  | 'doc-notice'
  | 'doc-pagebreak'
  | 'doc-pagelist'
  | 'doc-part'
  | 'doc-preface'
  | 'doc-prologue'
  | 'doc-pullquote'
  | 'doc-qna'
  | 'doc-subtitle'
  | 'doc-tip'
  | 'doc-toc';

type ARIARole =
  ARIAWidgetRole
  | ARIACompositeWidgetRole
  | ARIADocumentStructureRole
  | ARIALandmarkRole;

type ARIARoleDefinition = {
  /* Abstract roles may not be used in HTML. */
  abstract: boolean,
  /* The concepts in related domains that inform behavior mappings. */
  baseConcepts: Array<ARIARoleRelation>,
  /* Child presentational roles strip child nodes of roles and flatten the
  * content to text. */
  childrenPresentational: boolean,
  /* aria-* properties and states allowed on this role. */
  props: ARIAPropertyMap,
  /* The concepts in related domains that inform behavior mappings. */
  relatedConcepts: Array<ARIARoleRelation>,
  /* aria-* properties and states required on this role. */
  requiredProps: ARIAPropertyMap,
  /* An array or super class "stacks." Each stack contains a LIFO list of
  * strings correspond to a super class in the inheritance chain of this
  * role. Roles may have more than one inheritance chain, which is why
  * this property is an array of arrays and not a single array. */
  superClass: Array<Array<ARIAAbstractRole | ARIARole | ARIADPubRole>>,
};

type ARIAState =
  'aria-busy'
  | 'aria-checked'
  | 'aria-disabled'
  | 'aria-expanded'
  | 'aria-grabbed'
  | 'aria-hidden'
  | 'aria-invalid'
  | 'aria-pressed'
  | 'aria-selected';

type ARIAProperty =
  'aria-activedescendant'
  | 'aria-atomic'
  | 'aria-autocomplete'
  | 'aria-colcount'
  | 'aria-colindex'
  | 'aria-colspan'
  | 'aria-controls'
  | 'aria-current'
  | 'aria-describedby'
  | 'aria-details'
  | 'aria-dropeffect'
  | 'aria-errormessage'
  | 'aria-flowto'
  | 'aria-haspopup'
  | 'aria-keyshortcuts'
  | 'aria-label'
  | 'aria-labelledby'
  | 'aria-level'
  | 'aria-live'
  | 'aria-modal'
  | 'aria-multiline'
  | 'aria-multiselectable'
  | 'aria-orientation'
  | 'aria-owns'
  | 'aria-placeholder'
  | 'aria-posinset'
  | 'aria-readonly'
  | 'aria-relevant'
  | 'aria-required'
  | 'aria-roledescription'
  | 'aria-rowcount'
  | 'aria-rowindex'
  | 'aria-rowspan'
  | 'aria-setsize'
  | 'aria-sort'
  | 'aria-valuemax'
  | 'aria-valuemin'
  | 'aria-valuenow'
  | 'aria-valuetext'
  | ARIAState;

type ARIAPropertyMap = {
  'aria-busy'?: mixed,
  'aria-checked'?: mixed,
  'aria-disabled'?: mixed,
  'aria-expanded'?: mixed,
  'aria-grabbed'?: mixed,
  'aria-hidden'?: mixed,
  'aria-invalid'?: mixed,
  'aria-pressed'?: mixed,
  'aria-selected'?: mixed,
  'aria-activedescendant'?: mixed,
  'aria-atomic'?: mixed,
  'aria-autocomplete'?: mixed,
  'aria-colcount'?: mixed,
  'aria-colindex'?: mixed,
  'aria-colspan'?: mixed,
  'aria-controls'?: mixed,
  'aria-current'?: ?ARIAPropertyCurrent,
  'aria-describedby'?: mixed,
  'aria-details'?: mixed,
  'aria-dropeffect'?: mixed,
  'aria-errormessage'?: mixed,
  'aria-flowto'?: mixed,
  'aria-haspopup'?: mixed,
  'aria-keyshortcuts'?: mixed,
  'aria-label'?: mixed,
  'aria-labelledby'?: mixed,
  'aria-level'?: mixed,
  'aria-live'?: mixed,
  'aria-modal'?: mixed,
  'aria-multiline'?: mixed,
  'aria-multiselectable'?: mixed,
  'aria-orientation'?: mixed,
  'aria-owns'?: mixed,
  'aria-placeholder'?: mixed,
  'aria-posinset'?: mixed,
  'aria-readonly'?: mixed,
  'aria-relevant'?: mixed,
  'aria-required'?: mixed,
  'aria-roledescription'?: mixed,
  'aria-rowcount'?: mixed,
  'aria-rowindex'?: mixed,
  'aria-rowspan'?: mixed,
  'aria-setsize'?: mixed,
  'aria-sort'?: mixed,
  'aria-valuemax'?: mixed,
  'aria-valuemin'?: mixed,
  'aria-valuenow'?: mixed,
  'aria-valuetext'?: mixed,
};

type ARIAPropertyDefinition = {
  type: 'string'
  | 'id'
  | 'idlist'
  | 'integer'
  | 'number'
  | 'boolean'
  | 'token'
  | 'tokenlist'
  | 'tristate',
  value? : Array<string | boolean>,
  allowundefined?: boolean,
};

type ARIAPropertyCurrent =
  'page'
  | 'step'
  | 'location'
  | 'date'
  | 'time'
  | 'true'
  | 'false'
  | true
  | false;

type ARIARoleRelation = {
  module?: string,
  concept?: ARIARoleRelationConcept,
};

/* The concept in a related domain that informs behavior mappings.
 * Related domains include: HTML, "Device Independence Delivery Unit", XForms,
 * and ARIA to name a few. */
type ARIARoleRelationConcept = {
  name: string,
  attributes?: Array<ARIARoleRelationConceptAttribute>,
};

type ARIARoleRelationConceptAttribute = {
  name: string,
  value?: string,
};
