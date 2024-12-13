<?php

namespace app\search;

class google
{
    private $url;
    private $deffult_word;
    private $create_sentence;
    private $words;
    private $input;
    public function __construct($input, $diff_string = '')
    {
        $this->input = $input;
        $input_edited = $input;
        // غلط میندازیم توش تا گوگل اصلاح کند
        $input = $diff_string . ' ' . urldecode($input_edited);
        $optimize_for_google = str_replace(' ', '+', $input);
        $url_google = "https://www.google.com/search?sca_esv=bc957982f2bbd7ba&rlz=1C1GCEA_enIR1123IR1124&sxsrf=ADLYWIKUe2ylurxavSoCk0iDxQ5w9Ptf_A:1729398964375&q=$optimize_for_google&source=lnms&fbs=AEQNm0D0y7ziIZvclKCQdLUYHUnNbZYc9ZcdyIVuz5Wvr3lQoIZYZtf50mWuScU67se6fAAuLEfo-GBcvmK5hpcCKOZxFBxBYCCS5c6t_yEbSTrEgYdSdMpZIEdd8ToL349-Qd-8ZeUvpJS1gKBepHsUU1X4-Ch8YR-hsIM67O-L810ynWroLX_036utbaC6YEyzPV2itwoL&sa=X&ved=2ahUKEwiz_ciXkZyJAxUMVqQEHbcpHmEQ0pQJegQIExAB&biw=1408&bih=623&dpr=1.25" ;
        $this->url = $url_google;
        $this->deffult_word = $diff_string;
        $this->analize();
    }
    public function analize()
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $this->url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
        $html = html_entity_decode(curl_exec($curl));
        curl_close($curl);
        $dom = \HTMLDomParser\DomFactory::load($html);
        try {
            $create_sentence = $dom->findOne('a > span[dir=rtl]')->innerHtml();
            $create_sentence = str_replace(['<b><i>','</i></b>'],['',''],$create_sentence);
        } catch (\Throwable $th) {
            $create_sentence = '';
        }
        $create_sentence = str_replace('{]', '', $create_sentence);
        $create_sentence_result = trim(str_replace($this->deffult_word, '', $create_sentence));
        if (!str_contains($create_sentence, $this->deffult_word)) {
            $create_sentence_result = $this->input;
        }

        $this->create_sentence = $create_sentence_result;
        $this->words = explode(' ', $create_sentence_result);
    }
    public function get_words(): array
    {
        return $this->words;
    }
    public function get_sentence(): string
    {
        return $this->create_sentence;
    }
    public function is_matched(): bool
    {
        if (str_contains($this->get_sentence(), $this->input)) {
            return true;
        }
        return false;
    }
    public function get_page_extracted_woeds()
    {
        $url = $this->url;
        echo "<a href='$url'>See Page Extracted</a>";
    }
}
