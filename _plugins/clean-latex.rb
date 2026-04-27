# Cleans common biblatex/Zotero escape sequences in abstracts so that
# MathJax can typeset embedded LaTeX correctly.
#
# Examples:
#   \${\textbackslash}times\$  -> $\times$
#   \$f\_k\$                   -> $f_k$
#   99\%                       -> 99%
#   S\&P                       -> S&P
module Jekyll
  module CleanLatex
    def clean_latex(input)
      return input if input.nil?
      result = input.to_s
      # Order matters: drop the biblatex \$ escape first so {\textbackslash} can
      # be reduced to \ without leaving stray escaped dollars behind.
      result = result.gsub('\$', '$')
      result = result.gsub('{\textbackslash}') { '\\' }
      result = result.gsub('\_', '_')
      result = result.gsub('\%', '%')
      result = result.gsub('\&', '&')
      result = result.gsub('\#', '#')
      result
    end

    # Splits text on blank-line paragraph breaks and wraps each paragraph in <p>.
    # Use this in place of the surrounding <p> tag so multi-paragraph abstracts
    # render with visible spacing.
    def paragraphize(input)
      return input if input.nil?
      paragraphs = input.to_s.split(/\n\s*\n/).map(&:strip).reject(&:empty?)
      return '' if paragraphs.empty?
      paragraphs.map { |p| "<p>#{p}</p>" }.join("\n")
    end
  end
end

Liquid::Template.register_filter(Jekyll::CleanLatex)
